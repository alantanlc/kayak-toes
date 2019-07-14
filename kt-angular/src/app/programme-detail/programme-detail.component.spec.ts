import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDetailComponent } from './programme-detail.component';

describe('ProgrammeDetailComponent', () => {
  let component: ProgrammeDetailComponent;
  let fixture: ComponentFixture<ProgrammeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
