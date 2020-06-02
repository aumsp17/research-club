import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyStoryComponent } from './faculty-story.component';

describe('FacultyStoryComponent', () => {
  let component: FacultyStoryComponent;
  let fixture: ComponentFixture<FacultyStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
