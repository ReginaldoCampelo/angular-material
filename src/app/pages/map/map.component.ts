import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-arrowheads';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map;

  noRiskColor: string = '#6fb84c';
  lowRiskColor: string = '#51c7fa';
  mediumRiskColor: string = '#ffa500';
  highRiskColor: string = '#FF5B5B';

  vehicleOfflineColor: string = '#8c9197';
  vehicleStoppedWithMotorOnColor: string = '#e9c73a';
  vehicleRunningColor: string = '#4caf50';

  isLegendShow: boolean = false;
  isMobile: boolean = false;

  // lista de combinações de cores de risco e status
  riskStatusCombinations: Array<{ risk: string; status: string }> = [
    { risk: this.noRiskColor, status: this.vehicleRunningColor },
    { risk: this.lowRiskColor, status: this.vehicleStoppedWithMotorOnColor },
    { risk: this.mediumRiskColor, status: this.vehicleOfflineColor },
    { risk: this.highRiskColor, status: this.vehicleRunningColor },
    { risk: this.noRiskColor, status: this.vehicleOfflineColor },
    { risk: this.lowRiskColor, status: this.vehicleRunningColor },
    { risk: this.mediumRiskColor, status: this.vehicleStoppedWithMotorOnColor },
    { risk: this.highRiskColor, status: this.vehicleOfflineColor },
  ];

  constructor() {}

  ngOnInit(): void {
    this.verifyIfIsMobile();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private getTruckIconStyle(riskColor: string, statusColor: string): string {
    return `
      text-align: center;
      font-size: 16px;
      color: ${statusColor};
      border: 6px solid ${riskColor};
      border-radius: 50%;
      background-color: #fafafa;
      padding: 5px;
      width: 100%;
      position: relative;
    `;
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data © OpenStreetMap contributors',
    }).addTo(this.map);

    const locations: L.LatLngExpression[] = [
      [51.505, -0.09],
      [51.515, -0.1],
      [51.525, -0.08],
      [51.535, -0.07],
      [51.545, -0.06],
      [51.555, -0.05],
      [51.565, -0.04],
      [51.575, -0.03],
    ];

    for (const location of locations) {
      const randomIndex = Math.floor(
        Math.random() * this.riskStatusCombinations.length
      );
      const randomCombination = this.riskStatusCombinations[randomIndex];
      const randomDirection = Math.floor(Math.random() * 360);

      const customIcon = L.divIcon({
        className: 'custom-icon',
        html: `
          <div style="${this.getTruckIconStyle(
            randomCombination.risk,
            randomCombination.status
          )}">
            <i class="fa fa-truck"></i>
            <div class="arrow arrow-${randomDirection}"></div>
          </div>
        `,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      const marker = L.marker(location, { icon: customIcon }).addTo(this.map);
      marker.getElement()?.classList.add('marker-with-direction');
      marker.bindPopup(
        `<b>Olá!</b><br>Eu sou um caminhão em ${this.getRiskStatusText(
          randomIndex
        )}.`
      );

      // Atualizar a rotação da seta usando CSS
      const arrowElement = marker
        .getElement()
        ?.querySelector('.arrow.arrow-' + randomDirection);
      console.log(arrowElement);
      if (arrowElement instanceof HTMLElement) {
        arrowElement.style.transform = `rotate(${randomDirection}deg)`;
      }
    }
  }

  private getRiskStatusText(index: number): string {
    switch (index) {
      case 0:
        return 'no risk and running';
      case 1:
        return 'low risk and stopped with motor on';
      case 2:
        return 'medium risk and offline';
      case 3:
        return 'high risk and running';
      case 4:
        return 'no risk and offline';
      case 5:
        return 'low risk and running';
      case 6:
        return 'medium risk and stopped with motor on';
      case 7:
        return 'high risk and offline';
      default:
        return '';
    }
  }

  showLegend(): void {
    this.isLegendShow = !this.isLegendShow;
  }

  randowMarks(): void {
    window.location.reload();
  }

  verifyIfIsMobile() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
