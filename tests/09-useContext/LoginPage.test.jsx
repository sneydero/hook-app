import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { useForm } from "../../src/hooks/useForm";

jest.mock("../../src/09-useContext/context/UserContext");
jest.mock("../../src/hooks/useForm");

describe('Tests in <LoginPage/>', ()=>{ 
    const onInputChangeMock = jest.fn();
    
    useForm.mockReturnValue({
        formState:{
            name:'Sneyder', 
            email:'sneyder@gmail.com'
        },
        onInputChange: onInputChangeMock
    });
    
    test('It should call the setUser when submit the form', ()=>{        
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const inputName = screen.getByLabelText('name');
        const inputEmail = screen.getByLabelText('email');

        fireEvent.change(inputName, {target:{name:'name', value:'Sneyder'}})
        fireEvent.change(inputEmail, {target:{name:'email', value:'sneyder@gmail.com'}})        

        const codeTag = screen.getByLabelText('code');
        expect(codeTag.innerHTML).toBe('null');
        
    });

    test('It should call the setUser when submit the form', ()=>{
        const setUserMock = jest.fn();
               
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const inputName = screen.getByLabelText('name');
        const inputEmail = screen.getByLabelText('email');

        fireEvent.change(inputName, {target:{name:'name', value:'Sneyder'}})
        fireEvent.change(inputEmail, {target:{name:'email', value:'sneyder@gmail.com'}})

        expect(onInputChangeMock).toHaveBeenCalled();
                        
        screen.debug();
        
    });
    
});