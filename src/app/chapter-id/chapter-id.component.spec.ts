import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterIdComponent } from './chapter-id.component';

describe('ChapterIdComponent', () => {
  let component: ChapterIdComponent;
  let fixture: ComponentFixture<ChapterIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
