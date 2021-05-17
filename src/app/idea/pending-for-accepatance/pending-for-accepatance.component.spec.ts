import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingForAccepatanceComponent } from './pending-for-accepatance.component';

describe('PendingForAccepatanceComponent', () => {
  let component: PendingForAccepatanceComponent;
  let fixture: ComponentFixture<PendingForAccepatanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingForAccepatanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingForAccepatanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
