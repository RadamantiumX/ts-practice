// function saludar(name :string) {
//     console.log(`Hola ${name}`)
// }

// ----------------------------------------------------------------
// Una forma de TIPAR un objeto

// function saludarType({name, age}: {name: string, age: number}) {
//   console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludarType({name: 'Rada', age: '4'}) // Nos avisa
//----------------------------------------------------------------
// function saludar({name, age}: {name: string, age: number}) {
//     console.log(`Hola ${name}, tienes ${age} años`)
//     return age // Devuelve un numero
// }

// let username: string

// username = saludar({ name: 'Luka', age: 24 }) // Esta función devuelve un número, y declaramos la variable como String
//------------------------------------------------------------------------------
const sayHiFromFunction = (fn: (name: string) => void) => { // Esta funcion tiene otra q se ejecuta dentro
    fn('Lukas')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

// Tipado ARROW FUNCION

const sumar = (a: number, b: number): number => {
    return a + b
}

// Never
function throwError(message: string): never {
    throw new Error(message)
}