import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRequirementsFormComponent } from './open-requirements-form.component';

describe('OpenRequirementsFormComponent', () => {
  let component: OpenRequirementsFormComponent;
  let fixture: ComponentFixture<OpenRequirementsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRequirementsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRequirementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
