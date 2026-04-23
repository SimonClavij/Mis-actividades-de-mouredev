/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
/*class Person {
    constructor (name, age){
        this.name = name
        this.age = age
    }
}
*/

// 2. Añade un método a la clase que utilice las propiedades

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    
}
     
    saludo() {
        console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años`)
    }
    static isAdult(age) {
    return age >= 18}
}

// 3. Muestra los valores de las propiedades e invoca a la función
let person = new Person("Simon", 17)
person.saludo()
console.log(person.name)
console.log(person.age)


// 4. Añade un método estático a la primera clase


// 5. Haz uso del método estático
console.log(Person.isAdult(17)) 
console.log(Person.isAdult(20)) 
// 6. Crea una clase que haga uso de herencia

class Person2 {
    constructor (name){
        this.name = name
    }
    job(){
        console.log(`La persona que se llama${this.name}trabaja muy duro `)
    }
}

class Dab extends Person2 {

    cook(){
        console.log("Mi padre cocina")
    }

}
let  myDad = new Dab(" Jaime ")
myDad.job ()
myDad.cook()
// 7. Crea una clase que haga uso de getters y setters

class Camioneta { 
    #precio

    constructor(marca, modelo, precio){
        this.marca = marca
        this.modelo = modelo
        this.#precio = precio
    }
    get verPrecio() {
        return `El costo del regalo es: ${this.#precio} USD`}

        set actualizarPrecio(newValor) {
    if (typeof newValor === "number" && newValor > 0) { 
        this.#precio = newValor
        console.log("Precio actualizado con éxito")
    } else {
        console.log("Error: El precio debe ser un número positivo")
    }
}
}
const miRegalo = new Camioneta("Range Rover", "2026", 100000)
console.log(miRegalo.verPrecio) 
miRegalo.actualizarPrecio = 120000   
console.log(miRegalo.verPrecio)
// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 

class Daughter extends Person2{

    job(){
         console.log(`La hija ${this.name} estudia programación e inglés para cumplir sus sueños`)
    
    }
}
let miProgreso = new Daughter("Sara")
miProgreso.job()