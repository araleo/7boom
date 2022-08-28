import { act, renderHook } from '@testing-library/react';
import use7Boom from '../../hooks/use7Boom';

describe('use7Boom hook tests', () => {
  test('use7Boom inits with the initalNumber', () => {
    const { result } = renderHook(() => use7Boom(10));
    expect(result.current.sequence).toEqual([10]);
    expect(result.current.current).toEqual(10);
  });

  test('use7Boom inits with 0 when initialNumber is negative', () => {
    const { result } = renderHook(() => use7Boom(-10));
    expect(result.current.sequence).toEqual([-1]);
    expect(result.current.current).toEqual(0);
  });

  test('add1 adds the next regular element to the sequence', () => {
    const { result } = renderHook(() => use7Boom(10));
    act(() => result.current.add1());
    expect(result.current.sequence).toEqual([10, 11]);
  });

  test('add1 adds -1 to the sequence when the next element % 7 is 0', () => {
    const { result } = renderHook(() => use7Boom(13));
    act(() => result.current.add1());
    expect(result.current.sequence).toEqual([13, -1]);
  });

  test('use7Boom current number changes after increase', () => {
    const { result } = renderHook(() => use7Boom(10));
    act(() => result.current.add1());
    expect(result.current.current).toEqual(11);
  });

  test('use7Boom current number is valid when the sequence last number is a 7Boom number', () => {
    const { result } = renderHook(() => use7Boom(13));
    act(() => result.current.add1());
    expect(result.current.current).toEqual(14);
  });
});
