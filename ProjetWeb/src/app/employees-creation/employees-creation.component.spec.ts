import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCreationComponent } from './employees-creation.component';

describe('EmployeesCreationComponent', () => {
  let component: EmployeesCreationComponent;
  let fixture: ComponentFixture<EmployeesCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
