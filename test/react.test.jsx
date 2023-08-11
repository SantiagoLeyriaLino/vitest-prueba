import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Calculator, numbers, equalSing, operations } from "../src/Calculator";


describe('Calculator', ()=>{
    afterEach(cleanup)  //esto es para limpiar screen cada vez que se termina de ejecutar un test, ya que si no renderizariamos el mismo componente varias veces

    it('should render', ()=>{
       render(<Calculator />)
    })

    it('should render title correctly', ()=>{
        render(<Calculator />)

        screen.getByText('Calculator')  //busca el texto "Calculator"
    })

    it('should render numbers', ()=>{
        render(<Calculator />)

        numbers.forEach(number=>{
            screen.getByText(number)
        })
    })

    it('should render 4 rows', ()=>{
        render(<Calculator/>)

        const rows = screen.getAllByRole('row')
        expect(rows.length).toBe(4)
    })

    it('should render operations', ()=>{
        render(<Calculator />)

        operations.forEach(operation =>{
            screen.getByText(operation)
        })
    })

    it('should render equal sing', ()=>{
        render(<Calculator/>)

        screen.getByText('=')
    })

    it('should render an input', ()=>{
        render(<Calculator/>)

        screen.getByRole('textbox')
    })

    it('should user input after clicking a number', ()=>{
        render(<Calculator />)

        const one = screen.getByText('1') //recuperamos el uno de la calculadora
        fireEvent.click(one)  //aqui simulamos que n usuario le de click al 1

        const input = screen.getByRole('textbox') // recuperamos el input y vemos si el valor es uno, para verificar si se esta mostrando
        expect(input.value).toBe('1')
    })

    it('should user input after clicking several number', ()=>{
        render(<Calculator />)

        const one = screen.getByText('1') //recuperamos el uno de la calculadora
        fireEvent.click(one)  //aqui simulamos que n usuario le de click al 1

        const two = screen.getByText('2') //recuperamos el uno de la calculadora
        fireEvent.click(two)  //aqui simulamos que n usuario le de click al 1

        const three = screen.getByText('3') //recuperamos el uno de la calculadora
        fireEvent.click(three)  //aqui simulamos que n usuario le de click al 1

        const input = screen.getByRole('textbox') // recuperamos el input y vemos si el valor es uno, para verificar si se esta mostrando
        expect(input.value).toBe('123')
    })

    it('should show user input after clicking numbers and operations', ()=>{
        render(<Calculator/>)

        const one = screen.getByText('1') //recuperamos el uno de la calculadora
        fireEvent.click(one)  //aqui simulamos que n usuario le de click al 1

        const plus = screen.getByText('+')
        fireEvent.click(plus)
        fireEvent.click(one)

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('1+1')
    })

    it('should calculate based on user input and show the calculation', ()=>{
        render(<Calculator/>)

        const one = screen.getByText('1') //recuperamos el uno de la calculadora
        fireEvent.click(one)  //aqui simulamos que n usuario le de click al 1

        const plus = screen.getByText('+')
        fireEvent.click(plus)
        fireEvent.click(one)

        const equal = screen.getByText(equalSing)
        fireEvent.click(equal)

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('2')
    })
})