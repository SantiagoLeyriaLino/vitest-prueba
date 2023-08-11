/*
Escribir una funcion que al pasarle un numero:
    -Muestra "fizz" si es multiplo de 3.
    -Muestra "buzz" si es multiplo de 5.
    -muestra "fizzbuzz" si es multiplo de 3 y 5.
    -Muestra el numero si no es multiplo de ninguno de los anteriores
*/


export const fizzbuzz = (number) =>{
    if(typeof number !== 'number') throw new Error('parameter provided must be a number')
    if(Number.isNaN(number)) throw new Error('parameter provided must be a number')
    
    // if(number % 15 === 0) return 'fizzbuzz'
    // if(number % 3 === 0)return 'fizz'
    // if(number % 5 === 0)return 'buzz'
    
    // return number

    //el siguiente codigo es un equivalente al de arriba
    const multiplies = {3: 'fizz', 5: 'buzz'}
    let output = ''

    Object
        .entries(multiplies)
        .forEach(([multiplier, word])=>{
            if(number % multiplier === 0) output += word
        })

    return output === '' ? number : output
}