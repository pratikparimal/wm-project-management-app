import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRequirementsEditComponent } from './open-requirements-edit.component';

describe('OpenRequirementsEditComponent', () => {
  let component: OpenRequirementsEditComponent;
  let fixture: ComponentFixture<OpenRequirementsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRequirementsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRequirementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
