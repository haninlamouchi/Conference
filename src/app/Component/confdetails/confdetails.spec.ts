import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confdetails } from './confdetails';

describe('Confdetails', () => {
  let component: Confdetails;
  let fixture: ComponentFixture<Confdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Confdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
