
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../hooks/useTodos";
import { useContext } from "react";
import { UserContext } from "../09-useContext/context/UserContext";

const TodoApp = () => {

  const {todos, todosCount, leftTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo} = useTodos();
  const {user} =  useContext(UserContext)
  return (
    <>
      <h1>
        Tasks: {todosCount}, <small>Left: {leftTodosCount}</small> by: {user?.name}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos}
          onRemoveTodo={handleRemoveTodo}
          onToggleTodo={handleToggleTodo} 
           />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
