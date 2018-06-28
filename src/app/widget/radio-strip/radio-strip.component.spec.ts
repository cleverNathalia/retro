import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioStripComponent } from './radio-strip.component';

describe('RadioStripComponent', () => {
  let component: RadioStripComponent;
  let fixture: ComponentFixture<RadioStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
