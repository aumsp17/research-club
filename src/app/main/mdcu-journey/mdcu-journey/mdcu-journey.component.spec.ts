import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDCUJourneyComponent } from './mdcu-journey.component';

describe('MDCUJourneyComponent', () => {
  let component: MDCUJourneyComponent;
  let fixture: ComponentFixture<MDCUJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDCUJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDCUJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
