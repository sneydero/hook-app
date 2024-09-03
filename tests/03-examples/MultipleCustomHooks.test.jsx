import { fireEvent, render, screen } from "@testing-library/react"
import MultipleCustomHook from "../../src/03-examples/MultipleCustomHook"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")

describe('Tests in <MultipleCustomHooks/>', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter:1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('It should show the default component', () => {

        useFetch.mockReturnValue({ data: null, hasError: null, isLoading: true })

        render(<MultipleCustomHook/>)

        expect(screen.getByText('Pokemon Information'));
        expect(screen.getByText('Loading'));

        const nextButton = screen.getByRole('button', {name: 'Next'});
        
        expect(nextButton.className).toBe('btn btn-primary mt-2')
       
    })

    test('It should show a Pokemon Item', () => {

        useFetch.mockReturnValue({ data: 
            {
                name:'Sneyder', 
                id: 'Hola Mundo', 
                sprites:{                    
                }
            }, 
            hasError: null, 
            isLoading: false })

        render(<MultipleCustomHook/>)
        expect(screen.getByText('Pokemon Information'));      

        const nextButton = screen.getByRole('button', {name: 'Next'});        
        expect(nextButton.className).toBe('btn btn-primary mt-2')
       
    })

    test('It should call incremental function', () => {        

        useFetch.mockReturnValue({ data: 
            {
                name:'Sneyder', 
                id: 'Hola Mundo', 
                sprites:{                    
                }
            }, 
            hasError: null, 
            isLoading: false })
       

        render(<MultipleCustomHook/>)
       
        expect(screen.getByText('Pokemon Information'));      

        const nextButton = screen.getByRole('button', {name: 'Next'}); 
        fireEvent.click(nextButton)          
        expect(mockIncrement).toHaveBeenCalled()
       
    })
})