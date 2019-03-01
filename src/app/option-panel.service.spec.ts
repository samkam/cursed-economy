import { TestBed } from '@angular/core/testing';

import { OptionPanelService } from './option-panel.service';

describe('OptionPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptionPanelService = TestBed.get(OptionPanelService);
    expect(service).toBeTruthy();
  });
});
