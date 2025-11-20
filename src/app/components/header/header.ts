import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavItem } from '../../models';
import { SocialLink } from '../../models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly navItems: NavItem[] = [
    { label: 'Home', routerLink: '/', exact: true },
    { label: 'Portfolio', routerLink: '/portfolio', exact: true }
  ];

  readonly socialLinks: SocialLink[] = [
    {
      platform: 'XING',
      url: 'https://www.xing.com/profile/Tom_Brauer049114/',
      icon: 'images/xing.png',
      alt: 'Tom Brauer\'s XING profile',
      external: true
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tom-brauer-8450b932b/',
      icon: 'images/linkedin.png',
      alt: 'Tom Brauer\'s LinkedIn profile',
      external: true
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/1200BpmSpeedcore/',
      icon: 'images/github.svg',
      alt: 'Tom Brauer\'s GitHub profile',
      external: true
    },
    {
      platform: 'Email',
      url: 'mailto:tombrauer0102@gmail.com',
      icon: 'images/at_symbol.png',
      alt: 'Send an e-mail to Tom Brauer',
      external: false
    }
  ];
}
