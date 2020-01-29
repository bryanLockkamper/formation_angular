import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4ChildComponent } from './ex4-child.component';

describe('Ex4ChildComponent', () => {
  let component: Ex4ChildComponent;
  let fixture: ComponentFixture<Ex4ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
