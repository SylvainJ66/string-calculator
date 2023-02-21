import { calculate } from './calculate';

describe('Calculate a number', () => {
  test('calculate "0" return 0', async () => {
    expect(calculate('0')).toEqual(0);
  });
  test('calculate "1" return 1', async () => {
    expect(calculate('1')).toEqual(1);
  });
});