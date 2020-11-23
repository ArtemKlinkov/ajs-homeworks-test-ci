import { getLevel, lifebarColor, sortCharacters } from '../domain';
import fetchData from '../http';

// MOCK

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('should return 5 level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should return error', () => {
  fetchData.mockReturnValue({ status: 'error' });
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should return error for func lifebarColor without args', () => {
  expect(() => { lifebarColor(); }).toThrow('Не передан персонаж!');
});

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

test('should return "wounded" for health = 15', () => {
  const result = lifebarColor({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('should return "critical" for health = 7', () => {
  const result = lifebarColor({ name: 'Маг', health: 7 });
  expect(result).toBe('critical');
});

test('should return error for func sortCharacters without args', () => {
  expect(() => { sortCharacters(); }).toThrow('Не переданы персонажи для сортировки!');
});

test('should return sorted array by field "health"', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'рабочий', health: 10 },
    { name: 'лучник', health: 80 },
  ];

  const result = sortCharacters(characters);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'рабочий', health: 10 },
  ];

  expect(result).toEqual(expected);
});
