
/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, 2, 3, 4, 5]

let [Myvalue, Myvalue2] = myArray

console.log(Myvalue)
console.log(Myvalue2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let myArray2 = [1, 2, 3, 4, 5]

let [Myvalue3, Myvalue4 = 0] = myArray2

console.log(Myvalue3)
console.log(Myvalue4)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    name: "Simon",
    alias: "Programar",
    age : 18
}

let {name, alias} = person
console.log(name)
console.log(alias)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { name: nombreUsario } = person
console.log(nombreUsario)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person2 = {
    name: "Simon",
    setup: {
        monitores: 2,
        sistema: "Windows"
    }
}

let { setup: { monitores } } = person2
console.log(monitores)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray3 = [...myArray,...myArray2 ]
console.log( myArray3 )

// 7. Usa propagación para crear una copia de un array

let myArray4 = [...myArray]
console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let person3 = {...person, ...person2}
console.log(person3)

// 9. Usa propagación para crear una copia de un objeto
let person4 = {...person}
console.log(person4)

// 10. Combina desestructuración y propagaciónc

let ahorros = [100, 200, 300, 400, 500];

let [mesActual, ...futuro] = ahorros;

console.log(futuro)

