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
  });
  describe('Rule: Sum two numbers', () => {
    test('calculate "1,2" return 3', async () => {
      expect(calculate('1,2')).toEqual(3);
    });
    test('calculate "10,20" return 30', async () => {
      expect(calculate('10,20')).toEqual(30);
    });
    test('calculate "100,200" return 300', async () => {
      expect(calculate('100,200')).toEqual(300);
    });
  });
  describe('Rule: Sum three numbers', () => {
    test('calculate "1,2,3" return 6', async () => {
      expect(calculate('1,2,3')).toEqual(6);
    });
  });
});
