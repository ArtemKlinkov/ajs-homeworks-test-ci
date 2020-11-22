import { lifebarColor } from '../domain';

test('should return "healthy" for health = 90', () => {
  const result = lifebarColor({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should return "healthy" for health = 50', () => {
  const result = lifebarColor({ name: 'Маг', health: 50 });
  expect(result).toBe('healthy');
});

test('should return "wounded" for health = 30', () => {
  const result = lifebarColor({ name: 'Маг', health: 30 });
  expect(result).toBe('wounded');
});

test('should return "healthy" for health = 15', () => {
  const result = lifebarColor({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('should return "critical" for health = 7', () => {
  const result = lifebarColor({ name: 'Маг', health: 7 });
  expect(result).toBe('critical');
});
