import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeregsuccessComponent } from './employeeregsuccess.component';

describe('EmployeeregsuccessComponent', () => {
  let component: EmployeeregsuccessComponent;
  let fixture: ComponentFixture<EmployeeregsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeregsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeregsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
