import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchTalkComponent } from './research-talk.component';

describe('ResearchTalkComponent', () => {
  let component: ResearchTalkComponent;
  let fixture: ComponentFixture<ResearchTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
