import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Test in UseForm", () => {
  const initialForm = {
    name: "Sneyder Ospina Chavarria",
    email: "sneyder@gmail.com",
  };

  test("It should return the default values", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: "Sneyder Ospina Chavarria",
      email: "sneyder@gmail.com",
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("It should change the form name", () => {
    const newValue = "Karen Espinosa";
    const { result } = renderHook(() => useForm());
    const { onInputChange } = result.current;

    act(() => {
      const target = { name: "name", value: newValue };
      onInputChange({ target });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("It should reset the form", () => {
    const newValue = "Karen Espinosa";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      const target = { name: "name", value: newValue };
      onInputChange({ target });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

    act(() => {
      onResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
