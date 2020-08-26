import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfillmentPlanViewerComponent } from './fulfillment-plan-viewer.component';

describe('FulfillmentPlanViewerComponent', () => {
  let component: FulfillmentPlanViewerComponent;
  let fixture: ComponentFixture<FulfillmentPlanViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulfillmentPlanViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfillmentPlanViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
