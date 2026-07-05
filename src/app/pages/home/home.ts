import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InternalNavButton, Icon, SocialLink } from '../../models';

import { SocialLinksService } from '../../services/social-links';

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
export class HomePage implements OnInit {
  socialLinks: SocialLink[] = [];

  constructor(private socialLinksService: SocialLinksService) {}

  ngOnInit(): void {
    this.socialLinks = this.socialLinksService.getAll();
  }

  readonly buttonConfigs: InternalNavButton[] = [
    {
      label: 'My Projects/ Portfolio',
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
      routerLink: '/aboutme',
      exact: true,
    }
  ];

  readonly coreTechnologies: Icon[] = [
    {
      content: '🅰️',
      title: 'Angular',
      description: 'Frontend Framework'
    },
    {
      content: '⚙️',
      title: '.NET',
      description: 'Backend & APIs'
    },
    {
      content: '🗃️',
      title: 'SQL',
      description: 'Relational Databases'
    },
    {
      content: '🐙',
      title: 'GitHub',
      description: 'Version Control'
    }
  ];
}
