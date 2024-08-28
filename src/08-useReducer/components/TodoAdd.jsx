import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    id: "",
    description: "",
    done: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: new Date().getTime(), description, done: false };
    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What should we do?"
        name="description"
        value={description}
        onChange={onInputChange}
        className="form-control"
      />

      <button
        disabled={description.length < 3}
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Add
      </button>
    </form>
  );
};
