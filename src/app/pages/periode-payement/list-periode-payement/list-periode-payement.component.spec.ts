import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeriodePayementComponent } from './list-periode-payement.component';

describe('ListPeriodePayementComponent', () => {
  let component: ListPeriodePayementComponent;
  let fixture: ComponentFixture<ListPeriodePayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPeriodePayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPeriodePayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
