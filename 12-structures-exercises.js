/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = ["Perro", "Gato", "Elefante", "Jirafa", "Oso" ]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift("Zorro")
animals.push("Serpiente")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
let book = new Set(["1 libro", "2 libro", "3 libro", "4 libro", "5 libro"])
console.log(book)


// 5. Añade dos más. Uno de ellos repitelo

book.add("6 libro")
book.add("5 libro")
console.log(book)

// 6. Elimina uno concreto a tu elección
book.delete("2 libro")
console.log(book)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mes = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
    console.log(mes)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mes.has(5))


// 9. Añade al mapa una clave con un array que almacene los meses de verano 

let Verano = ["Junio", "Julio", "Agosto"]

mes.set("verano", Verano)

console.log(mes)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let numeros = [1, 2, 3, 4, 4]

let numerosSet = new Set(numeros)

let mapa = new Map()

mapa.set("numeros", numerosSet)

console.log(mapa)