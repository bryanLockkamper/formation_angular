import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3DetailsComponent } from './ex3-details.component';

describe('Ex3DetailsComponent', () => {
  let component: Ex3DetailsComponent;
  let fixture: ComponentFixture<Ex3DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
