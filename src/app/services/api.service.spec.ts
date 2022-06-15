import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    mockHttpClient.get.and.returnValue({});
    service = new ApiService(mockHttpClient);
  });

  it('should get info', () => {
    service.getInfo('');
    expect(service).toBeTruthy();
  });
});
