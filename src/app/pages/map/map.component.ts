import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map;
  private markerClusterGroup: L.MarkerClusterGroup;
  private markerClusterOptions: L.MarkerClusterGroupOptions = {
    disableClusteringAtZoom: 13,
    spiderfyOnMaxZoom: false,
  };

  noRiskColor: string = '#6fb84c';
  lowRiskColor: string = '#51c7fa';
  mediumRiskColor: string = '#ffa500';
  highRiskColor: string = '#FF5B5B';

  vehicleOfflineColor: string = '#8c9197';
  vehicleStoppedWithMotorOnColor: string = '#e9c73a';
  vehicleRunningColor: string = '#4caf50';

  isLegendShow: boolean = false;
  isMobile: boolean = false;

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

  private initMap(): void {
    this.map = L.map('map').setView([-28.2625, -52.4072], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data © OpenStreetMap contributors',
    }).addTo(this.map);

    this.markerClusterGroup = L.markerClusterGroup(this.markerClusterOptions);

    const locations: L.LatLngExpression[] = [
      [-28.259, -52.431],
      [-28.263, -52.444],
      [-28.272, -52.416],
      [-28.281, -52.408],
      [-28.288, -52.424],
      [-28.296, -52.437],
      [-28.302, -52.419],
      [-28.309, -52.411],
      [-28.315, -52.427],
      [-28.323, -52.440],
      [-28.330, -52.422],
      [-28.337, -52.414],
      [-28.343, -52.430],
      [-28.351, -52.443],
      [-28.358, -52.425],
      [-28.365, -52.417],
      [-28.371, -52.433],
      [-28.379, -52.446],
      [-28.386, -52.428],
      [-28.393, -52.420]
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
          <div class="truck-icon" style="transform: rotate(${randomDirection}deg);">
            <div class="icon-container">
              <img src="${this.getIconPath(randomCombination.status)}" style="width: 100%; height: 100%;" />
            </div>
            <i style="color: ${randomCombination.risk}; font-size: 15px; position: absolute; top: 72%; left: 100%; transform: translateY(-50%); margin-left: 2px;" class="fas fa-circle"></i>
          </div>
        `,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      const marker = L.marker(location, { icon: customIcon });
      this.markerClusterGroup.addLayer(marker);
      marker.getElement()?.classList.add('marker-with-direction');
      marker.bindPopup(
        `<b>Olá!</b><br>Eu sou um carro em ${this.getRiskStatusText(
          randomIndex
        )}.`
      );
    }

    this.map.addLayer(this.markerClusterGroup);
  }

  private getIconPath(statusColor: string): string {
    let iconPath = '';
    switch (statusColor) {
      case this.vehicleRunningColor:
        iconPath = 'assets/images/car-moving-icon.svg';
        break;
      case this.vehicleOfflineColor:
        iconPath = 'assets/images/car-offline-icon.svg';
        break;
      case this.vehicleStoppedWithMotorOnColor:
        iconPath = 'assets/images/car-stopped-enginer-on-icon.svg';
        break;
    }
    return iconPath;
  }

  private getRiskStatusText(index: number): string {
    switch (index) {
      case 0:
        return 'no risk and moving';
      case 1:
        return 'low risk and stopped with engine on';
      case 2:
        return 'medium risk and offline';
      case 3:
        return 'high risk and moving';
      case 4:
        return 'no risk and offline';
      case 5:
        return 'low risk and moving';
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
