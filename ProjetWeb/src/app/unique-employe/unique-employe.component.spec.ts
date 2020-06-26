import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueEmployeComponent } from './unique-employe.component';

describe('UniqueEmployeComponent', () => {
  let component: UniqueEmployeComponent;
  let fixture: ComponentFixture<UniqueEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
