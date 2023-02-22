import { calculate } from './calculate';

describe('Feature: Calculate number', () => {
  describe('Rule: Get Number from string', () => {
    test('calculate "0" return 0', async () => {
      expect(calculate('0')).toEqual(0);
    });
  });
});