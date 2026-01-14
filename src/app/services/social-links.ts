import { Injectable } from '@angular/core';

import { SocialLink, SocialPlatform, createSocialLink } from '../models/social';

@Injectable({
  providedIn: 'root',
})
export class SocialLinksService {
  private readonly links: SocialLink[] = [
    createSocialLink(
      'XING',
      'https://www.xing.com/profile/Tom_Brauer049114/',
      'images/xing.png',
      '👔',
      'My XING profile'
    ),
    createSocialLink(
      'LinkedIn',
      'https://www.linkedin.com/in/tom-brauer-8450b932b/',
      'images/linkedin.png',
      '💼',
      'My LinkedIn profile',
    ),
    createSocialLink(
      'GitHub',
      'https://github.com/1200BpmSpeedcore/',
      'images/github.svg',
      '💻',
      'My GitHub profile',
    ),
    createSocialLink(
      'Email',
      'mailto:tombrauer0102@gmail.com',
      'images/at_symbol.png',
      '✉️',
      'Send me an email',
      false
    )
  ];

  getAll(): SocialLink[] {
    return [...this.links];
  }

  getByPlatform(platform: SocialPlatform): SocialLink | undefined {
    return this.links.find(link => link.platform === platform);
  }
}
