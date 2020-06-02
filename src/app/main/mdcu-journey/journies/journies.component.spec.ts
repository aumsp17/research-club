import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourniesComponent } from './journies.component';

describe('JourniesComponent', () => {
  let component: JourniesComponent;
  let fixture: ComponentFixture<JourniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
