import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef(null);

  const onFocusInput = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Put you name"
        className="form-control"
      />
      <button onClick={onFocusInput} className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  );
};

export default FocusScreen;
