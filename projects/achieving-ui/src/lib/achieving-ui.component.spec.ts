import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievingUiComponent } from './achieving-ui.component';

describe('AchievingUiComponent', () => {
  let component: AchievingUiComponent;
  let fixture: ComponentFixture<AchievingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievingUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
