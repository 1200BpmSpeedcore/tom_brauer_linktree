import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InternalNavButton } from '../../models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  readonly buttonConfigs: InternalNavButton[] = [
    {
      label: 'My Projects',
      tooltip: 'Go to my portfolio page',
      variant: 'outline-primary',
      size: 'lg',
      disabled: false,
      routerLink: '/portfolio',
      exact: true
    },
    {
      label: 'About Me',
      tooltip: 'Go to my \"About Me\" page',
      variant: 'outline-secondary',
      size: 'lg',
      disabled: false,
      // TODO: Add about me routing
      routerLink: '/',
      exact: true,
    }
  ];
}
