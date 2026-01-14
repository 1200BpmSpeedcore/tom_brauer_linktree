import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonConfig, NavItem } from '../../models';
import { SocialLink } from '../../models';
import { CvDownload } from '../../models';

import { SocialLinksService } from '../../services/social-links';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NgbDropdownModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private socialLinksService: SocialLinksService) {}

  readonly navItems: NavItem[] = [
    { label: 'Home', routerLink: '/', exact: true },
    { label: 'Portfolio', routerLink: '/portfolio', exact: true },
    { label: 'About Me', routerLink: '/aboutme', exact: true }
  ];

  cvDownloads: CvDownload[] = [
    {
      language: 'english',
      label: 'CV (English)',
      flag: 'images/flags/english_flag.svg',
      path: 'https://drive.google.com/uc?export=download&id=1HnGwofAIGJ6NSilzAsZY7FjDUHUgUfMJ',
      fileType: 'PDF',
      description: 'My current CV in English in PDF format.'
    },
    {
      language: 'german',
      label: 'Lebenslauf (Deutsch)',
      flag: 'images/flags/german_flag.svg',
      path: 'https://drive.google.com/uc?export=download&id=1h_BGFCaIZDU1dMJgHROdQeH2mTbwX5tD',
      fileType: 'PDF',
      description: 'Mein aktueller Lebenslauf auf Deutsch im PDF-Format.'
    }
  ];

  cvButtonConfig : ButtonConfig = {
    label: 'View CV',
    tooltip: 'View my CV',
    icon: 'images/download.png',
    variant: 'outline-primary',
    size: 'sm',
    disabled: false
  }

  get socialLinks(): SocialLink[] {
    return this.socialLinksService.getAll();
  }

  downloadCv(cv: CvDownload, event: Event): void {
    event.preventDefault();
    console.log(`Downloading CV: ${cv.label}`);

    window.open(cv.path, '_blank');
  }
}
