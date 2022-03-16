import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should add two numbers", () => {
    let result = service.add(2, 3);
    expect(result).toEqual(5);
  });
  it(" add x:5, y:3 should equal 8", () => {
    let result = service.add(5, 3);
    expect(result).toEqual(8);
  });
});
