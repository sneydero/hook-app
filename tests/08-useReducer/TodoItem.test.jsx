import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/components/TodoItem"

describe('Tests in <TodoItem/>', ()=>{
    const todo = {
        id:1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=> jest.clearAllMocks());

    test('It should show the pending todo to complete', ()=>{
        render(
        <TodoItem 
            todo={todo} 
            onRemoveTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}/>);

        const liElement = screen.getByRole('listitem')        
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanItem = screen.getByLabelText('span');        
        expect(spanItem.className).toContain('align-self-center')
        
        
    })

    test('It should show the completed todo', ()=>{
        todo.done = true;
        render(
        <TodoItem 
            todo={todo} 
            onRemoveTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}/>);

        const liElement = screen.getByRole('listitem')        
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
               
        const spanItem = screen.getByLabelText('span');        
        expect(spanItem.className).toContain('text-decoration-line-through')
        
    })

    test('Span should call the toggleTodo', ()=>{
        todo.done = true;
        render(
        <TodoItem 
            todo={todo} 
            onRemoveTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}/>);        
               
        const spanItem = screen.getByLabelText('span');        
        fireEvent.click(spanItem);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
        
    })

    test('Button should call the deleteTodo', ()=>{        
        render(
        <TodoItem 
            todo={todo} 
            onRemoveTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}/>);        
               
        const deleteButton = screen.getByRole('button');        
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
        
    })
})