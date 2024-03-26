import { User } from './user-model';

describe('UserModel', () => {
  it('should create an instance', () => {
    expect(new User('bairon.freire', 'bairon.f5@gmail.com')).toBeTruthy();
  });
});
