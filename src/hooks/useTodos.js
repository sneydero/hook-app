import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
  }

export const useTodos = () => {

    const initialState = []
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))  
  }, [todos])


  const handleNewTodo = (todo) => {    
    const action = {
      type: "[TODO] Add Todo",
      payload: todo
    }
    dispatch(action);
  };

  const handleRemoveTodo = (id)=>{
    dispatch({
      type:'[TODO] Remove Todo',
      payload:id
    })
  }
  const handleToggleTodo = (id)=>{
    dispatch({
      type:'[TODO] Toggle Todo',
      payload:id
    })
  }

 

  return {
    todos, 
    todosCount: todos.length, 
    leftTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo, 
    handleRemoveTodo, 
    handleToggleTodo
    }
}
