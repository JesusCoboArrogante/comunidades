import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Provincia } from './provincia';

describe('Provincia', () => {
  let component: Provincia;
  let fixture: ComponentFixture<Provincia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Provincia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Provincia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
