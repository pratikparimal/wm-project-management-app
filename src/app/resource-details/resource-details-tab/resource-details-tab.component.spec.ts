import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDetailsTabComponent } from './resource-details-tab.component';

describe('ResourceDetailsTabComponent', () => {
  let component: ResourceDetailsTabComponent;
  let fixture: ComponentFixture<ResourceDetailsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceDetailsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
