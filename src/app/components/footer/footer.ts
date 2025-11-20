import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterSection, FooterLink } from '../../models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly footerSections: FooterSection[] = [
    {
      title: 'Links',
      links: [
        { label: 'Home', routerLink: '/', external: false },
        { label: 'Portfolio', routerLink: '/portfolio', external: false },
        {
          label: 'Cool Video',
          href: 'https://www.youtube.com/watch?v=NVnjzpoY1O8',
          external: true
        }
      ]
    },
    {
      title: 'Projects',
      links: [
        {
          label: 'This Website',
          href: 'https://github.com/1200BpmSpeedcore/tom_brauer_linktree',
          external: true
        }
      ]
    },
    {
      title: 'Formalities',
      links: [
        { label: 'Legal Disclosure', routerLink: '/imprint', external: false },
        { label: 'Privacy Policy', routerLink: '/privacy', external: false },
        { label: 'Impressum', routerLink: '/impressum', external: false },
        { label: 'Datenschutzerklärung', routerLink: '/datenschutz', external: false }
      ]
    }
  ];

  trackBySection(index: number, section: FooterSection): string {
    return section.title;
  }

  trackByLink(index: number, link: FooterLink): string {
    return link.label;
  }
}
