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
    test('calculate "3,4" return 7', async () => {
      expect(calculate('3,4')).toEqual(7);
    });
  });
});
