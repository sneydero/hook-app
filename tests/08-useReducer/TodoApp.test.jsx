import { render, screen } from "@testing-library/react";
import TodoApp from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";
import { UserContext } from "../../src/09-useContext/context/UserContext";

jest.mock("../../src/hooks/useTodos");

describe('Tests in <TodoApp/>', ()=>{

    useTodos.mockReturnValue({
        todos: [
            {id:1, description:'Todo #1', done: false},
            {id:2, description:'Todo #2', done: true}
        ], 
        todosCount: 2, 
        leftTodosCount: 1,
        handleNewTodo: jest.fn(), 
        handleRemoveTodo: jest.fn(), 
        handleToggleTodo: jest.fn()
    });
    
    
    test('It should show the component correctly', ()=>{        
        render(
            <UserContext.Provider value={{user:{name:'Sneyder'}}}>
                <TodoApp/>
            </UserContext.Provider>
        );
        expect(screen.getByText('Todo #1')).toBeTruthy();     
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox').name).toBeTruthy();
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain('Sneyder');
        screen.debug();
        
    });
    
});