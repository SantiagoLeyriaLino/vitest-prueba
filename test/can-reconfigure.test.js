import { describe, expect, it } from "vitest";
import { canReconfigure } from "../src/can-reconfigure";


describe('canReconfigure', ()=>{
    // it('should be a function', ()=>{
    //    expect(canConfigure).toBeTypeOf('function')
    // })

    it('should throw if firstt parameter is missing', ()=>{
        expect(()=>canReconfigure()).throw()
    })

    it('should throw if firstt parameter is not a string', ()=>{
        expect(()=>canReconfigure(2)).throw()
    })

    it('should throw if second parameter is missing', ()=>{
        expect(()=>canReconfigure('a')).throw()
    })

    it('should throw if second parameter is not a string', ()=>{
        expect(()=>canReconfigure('a', 2)).throw()
    })

    it('should return a boolean', ()=>{
        expect(canReconfigure('a','b')).toBeTypeOf('boolean')
    })

    it('should return "false" if strings provided have different length',()=>{
        expect(canReconfigure('abc', 'de')).toBe(false)
    })

    //este test aparecio luego del test de la misma ccantidad de letras unicas ya que de esta forma verificamos si la condicion funciona por mas que tenga la misma cantidad de letras uniccas
    it('should return "false" if strings provided have different length even unique letters',()=>{
        expect(canReconfigure('aab', 'ab')).toBe(false)
    })

    it('should return "false" if strings provided have different number of unique letters', ()=>{
        expect(canReconfigure('abc', 'ddd')).toBe(false)
    })

    it('should return "false" if strings has different order of transformation', ()=>{
        expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
    })
})