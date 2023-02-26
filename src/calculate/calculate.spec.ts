import { calculate } from './calculate';

describe('Feature: Calculate number', () => {
  describe('Rule: Get Number from string', () => {
    test('calculate "0" return 0', async () => {
      expect(calculate('0')).toEqual(0);
    });
    test('calculate "1" return 1', async () => {
      expect(calculate('1')).toEqual(1);
    });
    test('calculate "12" return 12', async () => {
      expect(calculate('12')).toEqual(12);
    });
  });
  describe('Rule: Add two numbers', () => {
    test('calculate "1,2" return 3', async () => {
      expect(calculate('1,2')).toEqual(3);
    });
    test('calculate "2,3" return 5', async () => {
      expect(calculate('2,3')).toEqual(5);
    });
    test('calculate "12,3" return 15', async () => {
      expect(calculate('12,3')).toEqual(15);
    });
    test('calculate "12,30" return 42', async () => {
      expect(calculate('12,30')).toEqual(42);
    });
    test('calculate "23,541" return 564', async () => {
      expect(calculate('23,541')).toEqual(564);
    });
  });
  describe('Rule: Empty string', () => {
    test('calculate "" return 0', async () => {
      expect(calculate('')).toEqual(0);
    });
  });
  describe('Rule: Calculate n numbers', () => {
    test('calculate "1,2,3" return 6', async () => {
      expect(calculate('1,2,3')).toEqual(6);
    });
  });
});
