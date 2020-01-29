import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3MasterComponent } from './ex3-master.component';

describe('Ex3MasterComponent', () => {
  let component: Ex3MasterComponent;
  let fixture: ComponentFixture<Ex3MasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3MasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3MasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
