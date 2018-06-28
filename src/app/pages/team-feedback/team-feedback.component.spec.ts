import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFeedbackComponent } from './team-feedback.component';

describe('TeamFeedbackComponent', () => {
  let component: TeamFeedbackComponent;
  let fixture: ComponentFixture<TeamFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
