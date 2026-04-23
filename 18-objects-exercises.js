/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let person = {
    name: "Simon",
    alias: "Programar",
    age : 18
}

// 2. Accede y muestra su valor

console.log(person.name)
console.log(person.alias)
console.log(person["age"])

// 3. Agrega una nueva propiedad

person.email = "santigo@gmail.com"

// 4. Elimina una de las 3 primeras propiedades

delete person.alias
console.log(person)
// 5. Agrega una función e invócala

let person2 = {
    name: "Simon",
    alias: "Programar",
    age : 18,
    talk: function (){
        console.log("Simon habla")
    }
    }
person2.talk()

// 6. Itera las propiedades del objeto

for (let key in person2) {
    console.log(key + ": " + person2[key])
}


// 7. Crea un objeto anidado

let person3 = {
    name: "Simon",
    alias: "Programar",
    age : 18,
    talk: function (){
        console.log("Simon habla")
    },
    job:{
        name: "Futuro programador",
        exp : "3 meses",
        work: function (){
            console.log(`La persona de ${person3.age} años de experiencia trabaja.`)
        }
    }

    }


// 8. Accede y muestra el valor de las propiedades anidadas
console.log(person3.name)
console.log(person3.alias)
console.log(person3.age)
person3.talk()
console.log(person3.job)
console.log(person3.job.name)
console.log(person3.job.exp)
person3.job.work()
// 9. Comprueba si los dos objetos creados son iguales
let person4 = {
    name: "Simon",
    alias: "Programar",
    age : 18
}

console.log(person == person4)
console.log(person === person4)



// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name == person4.name)
console.log(person.alias == person4.alias)