import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplaysComponent } from './screenplays.component';

describe('ScreenplaysComponent', () => {
  let component: ScreenplaysComponent;
  let fixture: ComponentFixture<ScreenplaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenplaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
