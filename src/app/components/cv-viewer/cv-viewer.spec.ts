import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvViewer } from './cv-viewer';

describe('CvViewer', () => {
  let component: CvViewer;
  let fixture: ComponentFixture<CvViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
