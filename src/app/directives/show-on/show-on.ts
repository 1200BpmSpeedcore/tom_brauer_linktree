import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { ResponsiveService } from '../../services/responsive/responsive';

@Directive({
  selector: '[appShowOn]',
  standalone: true,
})
export class ShowOnDirective implements OnDestroy {
  private subscription?: Subscription

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private responsiveService: ResponsiveService
  ) { }

  @Input() set appShowOn(screen: 'mobile' | 'desktop') {
    this.subscription?.unsubscribe();

    this.subscription = (screen === 'mobile'
      ? this.responsiveService.isMobile$
      : this.responsiveService.isDesktop$
    ).subscribe(show => this.updateView(show));
  }

  private updateView(show: boolean): void {
    this.viewContainer.clear();
    if (show) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
