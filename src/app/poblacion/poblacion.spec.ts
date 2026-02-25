import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poblacion } from './poblacion';

describe('Poblacion', () => {
  let component: Poblacion;
  let fixture: ComponentFixture<Poblacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poblacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poblacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
