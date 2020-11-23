import fetchData from '../http';

test('should return "healthy" for health = 90', () => {
  expect(() => { fetchData(); }).toThrow('Mock this!');
});
