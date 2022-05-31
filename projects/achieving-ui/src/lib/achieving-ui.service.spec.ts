import { TestBed } from '@angular/core/testing';

import { AchievingUiService } from './achieving-ui.service';

describe('AchievingUiService', () => {
  let service: AchievingUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievingUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
