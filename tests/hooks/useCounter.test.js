import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Test in UseCounter", () => {
  test("It should return the default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("It should return counter 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("It should increment the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => increment());

    expect(result.current.counter).toBe(11);
  });

  test("It should decrement the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => decrement());

    expect(result.current.counter).toBe(9);
  });

  test("It should reset the counter to the initial values", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { decrement, reset } = result.current;

    act(() => decrement());

    expect(result.current.counter).toBe(99);

    act(() => reset());

    expect(result.current.counter).toBe(initialValue);
  });
});
