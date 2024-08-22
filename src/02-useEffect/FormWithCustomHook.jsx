import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

const FormWithCustomHook = () => {
  const { formState, username, email, password, onInputChange, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  return (
    <>
      <h1>Simple Form with custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="user@domain.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Reset
      </button>
    </>
  );
};

export default FormWithCustomHook;
