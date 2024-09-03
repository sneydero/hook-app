import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Tests in todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Primer TODO'
    }];

    test('It should return the initial state', () => {
        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState)
    });

    test('It should add a todo', () => {
        
        const action = {
            type: "[TODO] Add Todo",
            payload: {
                id: 2,
                description: 'Nuevo todo # 2',
                done: false
            },
          };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe( 2 );
        expect(newState).toContain(action.payload);
    });

    test('It should delete a todo', () => {
        
        const action = {
            type: "[TODO] Add Todo",
            payload: {
                id: 2,
                description: 'Nuevo todo # 2',
                done: false
            },
          };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe( 2 );
        expect(newState).toContain(action.payload);
        
        const actionRemove = {
            type: "[TODO] Remove Todo",
            payload: 2,
          };
          const newStateRemoved = todoReducer(newState, actionRemove);
          expect(newStateRemoved.length).toBe( 1 );
          expect(newStateRemoved).toEqual(initialState);
    });

    test('It should toggle a todo', () => {        
        
        const newState = todoReducer(initialState, {});
        const actionToggle = {
            type: "[TODO] Toggle Todo",
            payload: 1,
          };
          const newStateRemoved = todoReducer(newState, actionToggle);
          expect(newStateRemoved[0].done).toBe(true);
    });
})