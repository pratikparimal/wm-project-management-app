import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRequirementsViewComponent } from './open-requirements-view.component';

describe('OpenRequirementsViewComponent', () => {
  let component: OpenRequirementsViewComponent;
  let fixture: ComponentFixture<OpenRequirementsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRequirementsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRequirementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
