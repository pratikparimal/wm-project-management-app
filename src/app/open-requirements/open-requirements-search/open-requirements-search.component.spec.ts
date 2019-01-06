import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRequirementsSearchComponent } from './open-requirements-search.component';

describe('OpenRequirementsSearchComponent', () => {
  let component: OpenRequirementsSearchComponent;
  let fixture: ComponentFixture<OpenRequirementsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRequirementsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRequirementsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
