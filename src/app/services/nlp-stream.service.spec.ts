/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NlpStreamService } from './nlp-stream.service';

describe('NlpStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NlpStreamService]
    });
  });

  it('should ...', inject([NlpStreamService], (service: NlpStreamService) => {
    expect(service).toBeTruthy();
  }));
});
