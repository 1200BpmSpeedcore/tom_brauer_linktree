import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InternalNavButton, Icon, SocialLink } from '../../models';

import { SocialLinksService } from '../../services/social-links';
import { ResponsiveService } from '../../services/responsive/responsive';

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

  constructor(
    private socialLinksService: SocialLinksService,
    public responsiveService: ResponsiveService) {
  }

  ngOnInit(): void {
    console.log('🔄 HomePage initialisiert');

    this.socialLinks = this.socialLinksService.getAll();

    console.log('📋 Button Configs:', JSON.stringify(this.buttonConfigs));
    console.log('📋 Social Links:', this.socialLinks);
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
      title: 'Database',
      description: 'Relational Databases'
    },
    {
      content: '🐙',
      title: 'GitHub',
      description: 'Version Control'
    }
  ];
}
