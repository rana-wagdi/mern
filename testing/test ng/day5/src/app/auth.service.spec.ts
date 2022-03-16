import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from './_models/user';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  it('needsLogin returns true when the user has not been authenticated', () => {
    expect(service.login({name:'sd',email:''})).toBeTruthy();
  });
});
