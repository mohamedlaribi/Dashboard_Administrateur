import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditperiodeComponent } from './editperiode.component';

describe('EditperiodeComponent', () => {
  let component: EditperiodeComponent;
  let fixture: ComponentFixture<EditperiodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditperiodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditperiodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
