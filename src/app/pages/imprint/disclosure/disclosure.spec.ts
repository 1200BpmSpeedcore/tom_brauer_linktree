import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disclosure } from './disclosure';

describe('Disclosure', () => {
  let component: Disclosure;
  let fixture: ComponentFixture<Disclosure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Disclosure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Disclosure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
