/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 15
let b = 10

let suma = (a + b)
console.log(suma)

let resta = ( a - b)
console.log (resta)

let multiplicacion = (a * b)
console.log (multiplicacion)

let modulo = (a % b)
console.log(modulo)

let exponente = (a ** b)
console.log(exponente)
 
/*
a++
console.log(a)

b--
console.log(b)
*/
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let aSuma = a
aSuma += 3
console.log(aSuma)

let aResta = a
aResta -= 4
console.log(aResta)

let bMulti = b
bMulti *= 5
console.log(bMulti)

let bDiv = b
bDiv /= 2
console.log(bDiv)

let aModulo = a
aModulo %= 10
console.log(aModulo)

let aExpo = a
aExpo **= 4
console.log(aExpo)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log (a>b)
console.log(a>=b)
console.log(a==15)
console.log (a === 15)
console.log (0 == false)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log (a<b)
console.log(a !== 15)
console.log(a==10)
console.log(a === "15")
console.log (0 === false)


// 5. Utiliza el operador lógico and

console.log(10 > 15 && 15 > 30)
console.log(10 < 15 && 15 < 30)
console.log(10 > 15 && 15 < 30)


// 6. Utiliza el operador lógico or

console.log(10 > 15 || 15 > 30)
console.log( 10< 15 || 15 < 30)
console.log(10 > 15 || 15 < 30)


// 7. Combina ambos operadores lógicos

console.log(10 > 15 && 15 > 30 || 70 < 50)

// 8. Añade alguna negación

console.log(!(10 > 15 && 15 > 30))

// 9. Utiliza el operador ternario

const iAmAlone = false
 iAmAlone? console.log("Estoy solo") : console.log("No estoy solo")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log (a * b > 100 && b > 5)