import { describe, expect, it } from "vitest"
import {fizzbuzz} from '../src/fizzbuzz'

/*
Escribir una funcion que al pasarle un numero:
    -Muestra "fizz" si es multiplo de 3.
    -Muestra "buzz" si es multiplo de 5.
    -muestra "fizzbuzz" si es multiplo de 3 y 5.
    -Muestra el numero si no es multiplo de ninguno de los anteriores
*/

describe('fizzbuzz', () =>{
    // este test lo desactive posteriormente porque es redundante
    // este test es para verificar si es una funcion
    // it('should be a function', ()=>{
    //     expect(typeof fizzbuzz).toBe('function')
    // })

    // este test es para verifiar si cuando se le pasa un parametro que no es un numero lanza un error, la funcion se ejecuta con callback porque es un throw
    it('should throw if not number is provided as parameter', ()=>{
        expect(()=>fizzbuzz()).toThrow()
    })

    // este test es para verificar si el mensaje de error es 'parameter provided must be a number', la funcion se ejecuta con callback porque es un throw
    it('should throw a specific error message if not number is provided as parameter', ()=>{
        expect(()=>fizzbuzz()).toThrow('parameter provided must be a number')
    })

    // este test es para verificar si el parametro es NaN debe lanzar un error con el mensage 'parameter provided must be a number', la funcion se ejecuta con callback porque es un throw
    it('should throw a specific error message not a number is provided', ()=>{
        expect(()=>fizzbuzz(NaN)).toThrow('parameter provided must be a number')
    })

    it('should return 1 if number provided is 1',()=>{
        expect(fizzbuzz(1)).toBe(1)
    })

    it('should return 2 if number provided is 2', ()=>{
        expect(fizzbuzz(2)).toBe(2)
    })

    it('should return "fizz" if number provided is 3', ()=>{
        expect(fizzbuzz(3)).toBe('fizz')
    })

    it('should return "fizz" if number provided is multiple of 3', ()=>{
        expect(fizzbuzz(6)).toBe('fizz')
        expect(fizzbuzz(9)).toBe('fizz')
        expect(fizzbuzz(12)).toBe('fizz')
    })

    // este test no tiene sentido ya que a la primera pasa, porque ya esta cubierto por otros tests
    // it('should return 4 if number provided is 4', ()=>{
    //     expect(fizzbuzz(4)).toBe(4)
    // })

    it('should return "buzz" if number provided is multiple of 5', ()=>{
        expect(fizzbuzz(5)).toBe('buzz')
    })

    it('should return "buzz" if number provided is multiple of 5', ()=>{
        expect(fizzbuzz(10)).toBe('buzz')
        expect(fizzbuzz(20)).toBe('buzz')
        expect(fizzbuzz(25)).toBe('buzz')
    })

    it('should return "fizzbuzz" if number provided is multiple of 15', ()=>{
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    })
})