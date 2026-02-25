import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccaa } from './ccaa';

describe('Ccaa', () => {
  let component: Ccaa;
  let fixture: ComponentFixture<Ccaa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ccaa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ccaa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
