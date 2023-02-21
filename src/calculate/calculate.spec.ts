import { calculate } from './calculate';

describe('Calculate a number', () => {
  test('calculate "" return 0', async () => {
    expect(calculate('')).toEqual(0);
  });
});