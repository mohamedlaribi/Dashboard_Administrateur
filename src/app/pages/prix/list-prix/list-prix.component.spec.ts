import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrixComponent } from './list-prix.component';

describe('ListPrixComponent', () => {
  let component: ListPrixComponent;
  let fixture: ComponentFixture<ListPrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
