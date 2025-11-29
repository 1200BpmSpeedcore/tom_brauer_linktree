import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-cv-viewer',
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule
  ],
  templateUrl: './cv-viewer.html',
  styleUrl: './cv-viewer.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CvViewer {
  pathUrl: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const file = params['file'];
      switch (file) {
        case 'german':
          this.pathUrl = '/cv/tom_brauer_cv_deutsch.pdf';
          break;
        case 'english':
          this.pathUrl = '/cv/tom_brauer_cv_english.pdf';
          break;
        default:
          this.pathUrl = '/cv/tom_brauer_cv_english.pdf';
      }
    });
  }
}
