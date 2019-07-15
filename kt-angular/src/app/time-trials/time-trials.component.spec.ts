import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrialsComponent } from './time-trials.component';

describe('TimeTrialsComponent', () => {
  let component: TimeTrialsComponent;
  let fixture: ComponentFixture<TimeTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
