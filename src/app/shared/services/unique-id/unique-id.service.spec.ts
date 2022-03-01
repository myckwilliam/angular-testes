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

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when prefix is passed as argument`, () => {
    const id = service.generateUniqueIdWithPrefix('coiso');
    expect(id.startsWith('coiso-')).toBe(true);
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate different Ids for different calls`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('coiso'));
    }
    expect(ids.size === 50).toBeTrue();
  });

  it(`${UniqueIdService.prototype.getNumberOfGeneretedUniqueIds.name}
    should return 2 when 2 ids are created`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('coiso');

    expect(service.getNumberOfGeneretedUniqueIds()).toBe(2);
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw error when empty values are passed`, () => {
    const emptyValues = [null, undefined, ''];
    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow();
    });
  });
});
