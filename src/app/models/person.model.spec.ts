import { Person } from './person.model';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person('Bairon', 'Freire', 'bairon.f5@gmail.com', '3225687135', 'Cra 28B2')).toBeTruthy();
  });
});
