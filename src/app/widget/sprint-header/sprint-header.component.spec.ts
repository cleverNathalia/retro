import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintHeaderComponent } from './sprint-header.component';

describe('SprintHeaderComponent', () => {
  let component: SprintHeaderComponent;
  let fixture: ComponentFixture<SprintHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
