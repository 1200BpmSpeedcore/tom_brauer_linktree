import { Injectable } from '@angular/core';

import { ProjectLink, createProjectLink } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ProjectLinkService {
  private readonly projectLinks: ProjectLink[] = [
    createProjectLink(
      'This Website',
      'https://github.com/1200BpmSpeedcore/tom_brauer_linktree',
      '/',
      'images/business_card.svg',
      'My digital business card and portfolio website built with Angular.',
      false
    )
  ];

  getAll(): ProjectLink[] {
    return [...this.projectLinks];
  }
}
