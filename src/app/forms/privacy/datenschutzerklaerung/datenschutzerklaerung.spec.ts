import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datenschutzerklaerung } from './datenschutzerklaerung';

describe('Datenschutzerklaerung', () => {
  let component: Datenschutzerklaerung;
  let fixture: ComponentFixture<Datenschutzerklaerung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datenschutzerklaerung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datenschutzerklaerung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
