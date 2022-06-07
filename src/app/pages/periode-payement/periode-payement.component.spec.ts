import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodePayementComponent } from './periode-payement.component';

describe('PeriodePayementComponent', () => {
  let component: PeriodePayementComponent;
  let fixture: ComponentFixture<PeriodePayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodePayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodePayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
