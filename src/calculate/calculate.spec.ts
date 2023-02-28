import { calculate } from './calculate';

describe('Feature: Calculate number', () => {
  describe('Rule: Get Number from string', () => {
    test('calculate "0" return 0', async () => {
      expect(calculate('0')).toEqual(0);
    });
    test('calculate "1" return 1', async () => {
      expect(calculate('1')).toEqual(1);
    });

  });
});
