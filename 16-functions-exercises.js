/*
Clase 32 - Ejercicios: Funciones
Video: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b){
    return a + b
}
let resultado = suma(5, 10)
console.log(resultado)
console.log(resultado)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayorDelArray(numeros){
    let mayor = numeros[0]
    for(let numero of numeros){
        if(numero > mayor){
            mayor = numero
        }
    }
    return mayor
}
let resultado2 = mayorDelArray([1, 3, 5, 80, 98, 10])
console.log(resultado2)
console.log(resultado2)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contadorVocales(texto){
    let contador = 0
    for(let posicion = 0; posicion < texto.length; posicion++){
        let letra = texto[posicion]
        letra = letra.toLowerCase()
        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
            contador++
        }
    }
    return contador
}
let resultado3 = contadorVocales("Hola mundo")
console.log(resultado3)
console.log(resultado3)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function ponerMayusculas(textos){
    let mayusculas = []
    for(let posicion2 = 0; posicion2 < textos.length; posicion2++){
        let mayu = textos[posicion2]
        mayu = mayu.toUpperCase()
        mayusculas.push(mayu)
    }
    return mayusculas
}

let tex = ponerMayusculas(["hola como estas amigo "])
console.log(tex)
console.log(tex)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function numeroEsPrimo (number){
     if(number <= 1){
        return false;
     }

for(let i = 2; i < number; i ++){
    if( number % i === 0){
        return false
    }
}
return true 
}
console.log(numeroEsPrimo(7))
console.log(numeroEsPrimo(7))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2){
    let comunes = []
        for(let elemento of array1){
            if(array2.includes(elemento)){
                comunes.push(elemento)
            }
        }
        return comunes
}
console.log(elementosComunes(["Hola", "como", "simon", "estas"], ["Hello", "estas", "niño", "como", "simon"]))
console.log(elementosComunes(["Hola", "como", "simon", "estas"], ["Hello", "estas", "niño", "como", "simon"]))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaDePares(number){
    let suma = 0
    for(let numero of number){
        if(numero % 2 === 0){
            suma += numero

        }

    }
    return suma
}

console.log(sumaDePares([1, 3, 90, 80, 75, 62, 68, 61, 35, 1000008, 2]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevdaosAlCuadrado(number){
    let elevados = []
    for(let numeros of number){
            numeros **= 2
            elevados.push(numeros)
    }
    return elevados
}
console.log(elevdaosAlCuadrado([2, 4, 6, 8, 10]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirCadena(texto){
    let array = texto.split(" ")
    let invertidas = array.reverse("")
        
    return invertidas.join( )
}
console.log(invertirCadena("Hola como estas"))
// 10. Crea una función que calcule el factorial de un número dado

    function factorial(number){
        let resultado = 1
        for(let i = 1; i <= number; i++){
            resultado *=i
        }
        return resultado
    }
    console.log(factorial(5))