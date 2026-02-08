import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isMobile$: Observable<boolean>;
  isDesktop$: Observable<boolean>;

  imageSizeClass$: Observable<string>;
  smallImageSizeClass$: Observable<string>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ]).pipe(map(result => result.matches));

    this.isDesktop$ = this.breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(map(result => result.matches));

    this.imageSizeClass$ = this.isMobile$.pipe(
      map(isMobile => isMobile ? 'img-sm' : 'img-md'),
      shareReplay(1)
    );

    this.smallImageSizeClass$ = this.isMobile$.pipe(
      map(isMobile => isMobile ? 'img-xs' : 'img-sm'),
      shareReplay(1)
    );
  }

  getLeadClass(): Observable<string> {
    return this.isMobile$.pipe(
      map(isMobile => isMobile ? 'lead-sm' : 'lead'),
      shareReplay(1)
    );
  }
}
