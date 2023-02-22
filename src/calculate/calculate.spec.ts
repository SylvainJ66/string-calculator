import { calculate } from './calculate';

describe('Feature: Calculate number', () => {
  describe('Rule: Get Number from string', () => {
    test('calculate "0" return 0', async () => {
      expect(calculate('0')).toEqual(0);
    });
    test('calculate "1" return 1', async () => {
      expect(calculate('1')).toEqual(1);
    });
    test('calculate "" return 0', async () => {
      expect(calculate('')).toEqual(0);
    });
    test('calculate "12" return 12', async () => {
      expect(calculate('12')).toEqual(12);
    });
  });
  describe('Rule: Sum 2 numbers', () => {
    test('calculate "1,2" return 3', async () => {
      expect(calculate('1,2')).toEqual(3);
    });
    test('calculate "12,2" return 14', async () => {
      expect(calculate('12,2')).toEqual(14);
    });
  });
});