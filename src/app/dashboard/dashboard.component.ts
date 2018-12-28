import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 960;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'WM Project Management';

  private mediaMatcher: MediaQueryList = window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  @Output() toggleSidenav = new EventEmitter<boolean>();

  sidenavToggle() {
    return this.toggleSidenav.emit(true);
  }


  constructor(zone: NgZone) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
   }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
