import { calculate } from './calculate';

describe('Calculate a number', () => {
  test('calculate "" return 0', async () => {
    expect(calculate('')).toEqual(0);
  });
  test('calculate "1" return 1', async () => {
    expect(calculate('1')).toEqual(1);
  });
  test('calculate "2" return 2', async () => {
    expect(calculate('2')).toEqual(2);
  });
});
describe('Sum n numbers separated with commas', () => {
  test('calculate "0,1,2" return 3', async () => {
    expect(calculate('0,1,2')).toEqual(3);
  });
  test('calculate "100,30,24,2" return 156', async () => {
    expect(calculate('100,30,24,2')).toEqual(156);
  });
});