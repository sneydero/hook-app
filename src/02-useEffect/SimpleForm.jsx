import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "sneydero",
    email: "sneydero@test.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };
  useEffect(() => {
    // console.log("use effect");
    return () => {
      //   console.log("return called");
    };
  }, []);

  useEffect(() => {
    // console.log("use formstate");
    return () => {
      //   console.log("return called formstate");
    };
  }, [formState]);

  useEffect(() => {
    // console.log("use email");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
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
      {username === "sneydero2" && <Message />}
    </>
  );
};

export default SimpleForm;
