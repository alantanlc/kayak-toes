import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddlersComponent } from './paddlers.component';

describe('PaddlersComponent', () => {
  let component: PaddlersComponent;
  let fixture: ComponentFixture<PaddlersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaddlersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
