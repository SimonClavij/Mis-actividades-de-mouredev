/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Mateo"

if(myName == "Mateo"){
    console.log(myName)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuarioAsignado= "Mateo09"
let contraseñaAsignada = "1018243040"

let usuarioIngresado = "Mateo09"
let contraseñaIngresada = "1018243040"

if (( usuarioIngresado === usuarioAsignado) &&( contraseñaIngresada=== contraseñaAsignada)) {
console.log("el usuario y contraseña son correctos")
} else {
    console.log("Es incorrecto el usuario o contraseña")
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0
if (numero<0){
    console.log("El numero es negativo")
} else if (numero===0){
    console.log("El numero es cero")
} else {
    console.log("El numero es positivo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 18
if (edad<18){
    console.log( "Es menor de edad, le faltan " + (18 - edad) + " años para votar" )
}else if (edad >= 18) {
    console.log("Es mayor de edad ya puede votar") 
}
        
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const message = edad >= 18 ? "adulto ": "Menor"
console.log(message)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 7
let estacion 

if  (mes === 12 || mes === 1 || mes=== 2){
    estacion = "invierno"
} else if ( mes === 3 || mes === 4 || mes === 5){
    estacion ="Primavera"
} else if ( mes === 6 || mes === 7 || mes === 8) {
    estacion = "Verano"
} else if ( mes == 9 || mes === 10 || mes === 11 ){
    estacion = "Otoño"    
}
console.log(estacion)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes===2){
console.log("El mes tiene 28 dias")
} else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
    console.log("El mes tiene 30 dias")
} else {
    console.log("El mes tiene 31 dias")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Hello"
let saludo
switch(idioma){
    case "español" :
        saludo = "Hola"
        break
    case "ingles" :
        saludo = "Hello" 
        break   
    case "frances" :
        saludo = "Bonjour"
        break
    case "portugues" :
        saludo = "olá"
        break
    case "italiano" :
        saludo = "ciao"
        break
    default :
    saludo = "En chino o q parcero"                
}
    
console.log(saludo)
 

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(mes){
    case 12 :
    case 1 :    
    case 2 : 
        estacion = "Invierno"
        break
    
    case 3 :
    case 4 :     
    case 5 : 
         estacion = "Primavera"
        break 
    
    case 6 :
    case 7 :     
    case 8 : 
       estacion = "Verano"
        break
        
    case 9 :
    case 10 :     
    case 11 :      
        estacion = "Otoño"
        break                                   
}
console.log(estacion)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
let diasDelMes
 switch(mes){
    case 2 :
        diasDelMes = "Tiene 28 dias el mes"
        break
    case 4:
    case 6:
    case 9:
    case 11:
        diasDelMes = "Tiene 30 dias el mes"
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:                        
        diasDelMes = "Tienes 31 dias el mes"    
        break
 }
 console.log(diasDelMes)