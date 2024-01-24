// Type Alias

// Creamos un ALIAS
// Al crear TYPES propios, siempre lo hacemos en PASCALCASE, la inicial es mayúscula
// type Hero = {
//     name: string,
//     age: number
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// }
// function createHero(name: string, age: number): Hero {
//     return {
//         name,
//         age
//     }
// }

// const thor = createHero('Thor', 1500)
//----------------------------------------------------------------
// Optional Properties

// type Hero = {
//     readonly id?: number,
//     name: string,
//     age: number,
//     isActive?: boolean // Añadimos una propiedad opcional con el simbolo "?"
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// }
// function createHero(name: string, age: number): Hero {
//     return {
//         name,
//         age
//     }
// }

// const thor = createHero('Thor', 1500)
//----------------------------------------------------------------
// Template Union Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//     readonly id?: HeroId,
//     name: string,
//     age: number,
//     isActive?: boolean 
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// }
// function createHero(name: string, age: number): Hero {
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true
//     }
// }

// const thor = createHero('Thor', 1500)

// type HexadecimalColor = `#${string}`
// const color: HexadecimalColor = '0033ff' // -->Error: type is not assignable
// const color2: HexadecimalColor = '#0033ff' // Ok, color

//----------------------------------------------------------------
// Union Types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' 

// type Hero = {
//     readonly id?: HeroId,
//     name: string,
//     age: number,
//     isActive?: boolean,
//     powerScale?: HeroPowerScale 
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// }
// function createHero(name: string, age: number): Hero {
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true
//     }
// }

// const thor = createHero('Thor', 1500)
// thor.powerScale = 'multiversal'

//----------------------------------------------------------------
// Intersection Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
//  type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' 

//  type HeroBasicInfo = {
//     name: string,
//     age: number
//  }

//  type HeroProperties = {
//      readonly id?: HeroId,
//      isActive?: boolean,
//      powerScale?: HeroPowerScale 
//  }

//  type Hero = HeroBasicInfo & HeroProperties

//  let hero: Hero = {
//      name: 'Thor',
//      age: 1500
//  }
//  function createHero(input: HeroBasicInfo): Hero {
//     const { name, age } = input 

//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true
//     }
//  }

//  const thor = createHero({ name: 'Thor', age: 1500 })
//  thor.powerScale = 'multiversal'

 // ----------------------------------------------------------------
// Type Indexing

// type HeroProperties = {
//     isActive: boolean,
//     address: {
//         planet: string,
//         city: string
//     }
// }

// const addressHero: HeroProperties['address'] = {   
//     planet: 'Earth',
//     city: 'Madrid'
//  }

// ----------------------------------------------------------------
// Type from value

// const address = {
//     planet: 'Earth',
//     city: 'Madrid'
// }

// type Address = typeof address

// const addressTwitch: Address = {
//     planet: 'Mars',
//     city: 'Twitch'
// }

//----------------------------------------------------------------
// Type from function return 
function createAddress() {
    return {
        planet: 'Earth',
        city: 'Madrid'
    }
}

type Address = ReturnType<typeof createAddress>