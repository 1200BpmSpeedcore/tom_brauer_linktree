import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import * as bootstrap from 'bootstrap';

import { ButtonConfig, NavItem } from '../../models';
import { SocialLink } from '../../models';
import { CvDownload } from '../../models';

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
export class Header implements AfterViewInit {
  readonly navItems: NavItem[] = [
    { label: 'Home', routerLink: '/', exact: true },
    { label: 'Portfolio', routerLink: '/portfolio', exact: true }
  ];

  readonly socialLinks: SocialLink[] = [
    {
      platform: 'XING',
      url: 'https://www.xing.com/profile/Tom_Brauer049114/',
      icon: 'images/xing.png',
      alt: 'My XING profile',
      external: true
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tom-brauer-8450b932b/',
      icon: 'images/linkedin.png',
      alt: 'My LinkedIn profile',
      external: true
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/1200BpmSpeedcore/',
      icon: 'images/github.svg',
      alt: 'My GitHub profile',
      external: true
    },
    {
      platform: 'Email',
      url: 'mailto:tombrauer0102@gmail.com',
      icon: 'images/at_symbol.png',
      alt: 'Send me an email',
      external: false
    }
  ];

  cvDownloads: CvDownload[] = [
    {
      language: 'english',
      label: 'CV (English)',
      flag: 'images/flags/english_flag.svg',
      path: 'cv/tom_brauer_cv_english.pdf',
      fileType: 'PDF',
      description: 'My current CV in English in PDF format.'
    },
    {
      language: 'german',
      label: 'Lebenslauf (Deutsch)',
      flag: 'images/flags/german_flag.svg',
      path: 'cv/tom_brauer_cv_deutsch.pdf',
      fileType: 'PDF',
      description: 'Mein aktueller Lebenslauf auf Deutsch im PDF-Format.'
    }
  ];

  cvButtonConfig : ButtonConfig = {
    label: 'Download CV',
    tooltip: 'Download my CV',
    icon: 'images/download.png',
    size: 'sm',
    disabled: false
  }

  ngAfterViewInit(): void {
    // Tooltips initialisieren
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(
      tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }

  downloadFile(cv: CvDownload, event: Event): void {
    event.preventDefault();
    console.log(`Downloading CV: ${cv.label} from path: ${cv.path}`);

    const link = document.createElement('a');
    link.href = cv.path;
    link.download = `tom_brauer_cv_${cv.language}.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
