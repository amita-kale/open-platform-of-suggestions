import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingIdeaComponent } from './view-pending-idea.component';

describe('ViewPendingIdeaComponent', () => {
  let component: ViewPendingIdeaComponent;
  let fixture: ComponentFixture<ViewPendingIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPendingIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
