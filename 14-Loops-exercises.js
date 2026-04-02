/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(let i= 1; i <= 20; i++){
    console.log(i)
}

let o = 1
while(o <= 20){
    console.log(o)
    o++
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
 let suma = 0
for(let i = 1; i<= 100; i++){
    console.log(suma+=i)
}
i=0
suma = 0
while(i<=100){
    console.log(suma+=i)
    i++
}
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let e = 0; e <=50; e += 2){
   console.log(e)
}

let e = 1
while(e<=50){
    console.log(e)
    e+=2
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Ana", "Pedro", "Luis", "Maria"]
for(let valor of nombres){
    console.log(valor)
}

let p = 0
while(p < nombres.length){ 
    console.log(nombres[p])
    p++
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "Hola mundo"
let contador = 0
for(let posicion = 0; posicion < texto.length; posicion++){
    let letra = texto[posicion]
    letra = letra.toLowerCase()
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      contador++  
}
}
console.log(contador)

let tex= "Hola mundo"
let cont = 0
let posic = 0
while(posic < tex.length){
    let letr = tex[posic]
    letr = letr.toLowerCase()
    if (letr === "a" || letr === "e" || letr === "i" || letr === "o" || letr === "u"){
        cont++
    }
    posic++
}
console.log(cont)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [2, 3, 4]
let producto = 1

for( let valor of numeros ){
    producto *= valor
}
console.log(producto)

let numbe = [2, 3, 4]
let pro = 1
let k = 0
while(k < numbe.length){
    pro *= numbe[k]
    k++
}
console.log(pro)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let g = 1; g <= 10; g++) {
    console.log("5 x " + g + " = " + (5 * g));
}

let q = 1
while(q <= 10){
    console.log("5 x " + q + " = " + (5 * q) )
    q++
}
// 8. Usa un bucle para invertir una cadena de texto

let te = "hola";
let invertido = "";

for (let u = te.length - 1; u >= 0; u--) {
    invertido += te[u];
}
console.log(invertido);

let string = "hola"
let reversa = ""
let n = string.length -1
while (n >= 0){
    reversa += string[n]
    n--
}
console.log(reversa)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0
let b = 1
for(let contador = 0; contador < 10; contador++){
    let nuevo = a + b
    console.log(a)

    a = b
    b = nuevo
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let valores = [ 5, 12, 20, 87, 2, 9]
let mayores = []
for( let valor of valores){
    if(valor > 10){
        mayores.push(valor)
    }
}
console.log(mayores)

let valoress = [5, 12, 20, 87, 2, 9]
let mayors = []

let position = 0
while (position < valoress.length ){
    let valorr = valoress[position]

    if (valorr > 10){
        mayors.push(valorr)
    }
    position++
}
console.log(mayors)