import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when prefix is passed as argument`, () => {
    const id = service.generateUniqueIdWithPrefix('coiso');
    expect(id.startsWith('coiso-')).toBe(true);
  });
});
