
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../hooks/useTodos";

const TodoApp = () => {

  const {todos, todosCount, leftTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo} = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>Left: {leftTodosCount}</small>
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
