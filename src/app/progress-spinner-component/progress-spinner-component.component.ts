import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner-component',
  templateUrl: './progress-spinner-component.component.html',
  styleUrls: ['./progress-spinner-component.component.scss']
})
export class ProgressSpinnerComponentComponent implements OnInit {

  public loadingPercent: number = 0;
  public queryValue: number = 0;
  public queryMode: ProgressBarMode = 'query';
  public spinnerMode: ProgressSpinnerMode = 'indeterminate';
  public currentPlaybackTime: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadingProgress(500, 100)
      .subscribe(i => this.loadingPercent = i);

      this.loadingProgress(400, 100)
      .subscribe(i => this.currentPlaybackTime = i);

    concat(
      interval(2000).pipe(
        take(1),
        tap(_ => (this.queryMode = 'determinate'))
      ),
      this.loadingProgress(500, 100)
    ).subscribe(i => this.queryValue = i);

    concat(
      interval(2000).pipe(
        take(1),
        tap(_ => (this.spinnerMode = 'determinate'))
      ),
      this.loadingProgress(500, 100)
    ).subscribe(i => this.queryValue = i);
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed).pipe(
      map(i => i * 5),
      takeWhile(i => i <= takeUntil)
    );
  }
}
