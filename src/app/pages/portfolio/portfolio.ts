import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProjectLink } from '../../models';

import { ProjectLinkService } from '../../services/project-link/project-link';
import { ResponsiveService } from '../../services/responsive/responsive';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  projectLinks: ProjectLink[] = [];

  constructor(
    private projectLinkService: ProjectLinkService,
    public responsiveService: ResponsiveService
  ) {}

  ngOnInit(): void {
    this.projectLinks = this.projectLinkService.getAll();
  }
}
