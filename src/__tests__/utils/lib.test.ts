import { forcePositive, getNumOrBoom, isNumBoom } from '../../utils/lib';

describe('lib tests', () => {
  test('forcePositive returns the input if input is greater than or equal to zero', () => {
    expect(forcePositive(1)).toBe(1);
    expect(forcePositive(100)).toBe(100);
    expect(forcePositive(0)).toBe(0);
    expect(forcePositive(5.5)).toBe(5.5);
  });

  test('forcePositive returns zero if input is less than zero', () => {
    expect(forcePositive(-1)).toBe(0);
    expect(forcePositive(-100)).toBe(0);
    expect(forcePositive(-5.5)).toBe(0);
  });

  test('getNumOrBoom returns input if input is not divisible by 7', () => {
    expect(getNumOrBoom(1)).toBe(1);
    expect(getNumOrBoom(100)).toBe(100);
  });

  test('getNumOrBoom returns -1 if input is divisible by 7', () => {
    expect(getNumOrBoom(7)).toBe(-1);
    expect(getNumOrBoom(49)).toBe(-1);
  });

  test('isNumBoom returns false if number is not divisible by 7', () => {
    expect(isNumBoom(1)).toBe(false);
    expect(isNumBoom(100)).toBe(false);
    expect(isNumBoom(-10)).toBe(false);
  });

  test('isNumBoom returns true if number is divisible by 7', () => {
    expect(isNumBoom(7)).toBe(true);
    expect(isNumBoom(49)).toBe(true);
  });
});
