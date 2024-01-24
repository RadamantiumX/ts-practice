# TypeScript 

Es simplemente JS con una sintaxis para TYPES, es como un ***superset*** de JS.

![Alt text](image.png)

De todas formas, todo lo que llega al navegador es JS, el TS se compila para convertirse en este último.

En JS es de tipado **debil**, pero a su vez dinámico.

**JS**
```
let a = 'hola' // String
a = 2 // Number

console.log(typeof a) // -> Number
```
En ningun momento, en JS, tenemos que especificar que el tipo de variable que vamos a declarar tiene que ser de algun tipo, ya sea, String, Number, Boolean, etc...

Esto último no es posible en TS, el tipado es fuerte, por lo tanto es necesario mantener el tipo de dato en la variable.

***Nota importante: TS no funciona en tiempo de EJECUCION solo de COMPILACION, eso quiere decir que, el navegador no entiende de TS, lo que ejecuta en realidad es JS. Tampoco es necesario hacer un tipado de todo, mucho menos de los *TIPOS BASICOS, mientras menos tipado tengamos mejor.***

***Lo que nos brinda TS es seguridad, robustez, entre muchas cosas, pero no es una forma de ahorrar codigo, todo lo contrario, vamos a escribir mas codigo.***

**TS**

```
const a: string = 'Hola'
```
Esa es una sintaxis de TS, pero al momento de ejecutase en el navegador desaparece.



*En TS tenemos los TIPOS BÁSICOS: String, Number, Boolean, Null, Undefined, etc...


## Inferencias

**TS es capaz de ver, una determinada variable u objeto, y decirnos su forma o sus tipos.**

```
let text = 'hello'
text.toLowerCase()
```
En este caso, VSC, va a inferir y nos va a decir que tipos de metodos podemos usar con esa variable de de tipo ***String***. En este caso, vemos que entre muchas nos sugirio ***toLowerCase()***.

Cuando no sepa de que tipo se trata la variable, por defecto TS lo califica como **any**.

```
let anyValue: any = 'hello'
```
Al tiparlo con **any**, le decimos a TS que ignore el tipado de TS. Es decir, ya no tomaria como ***String*** a "hello". En este caso, TS no va a inferir con la sugerencia de algún metodo.

La inferencia funciona, también, en las funciones anonimas.

```
const avengers = ['Spidey', 'Hulk', 'Iron Man']

avengers.forEach(function(avengers) {
    console.log(avengers.toUpperCase())
})

```
Al utilizar el *forEach*, ya sabe que son *strings*, y por eso nos empieza a mostrar todos los metodo disponibles para eso.


## Funciones

```
function saludar(name) {
    console.log(`Hola ${name}`)
}

```
En este simple funcion, TS nos va a avisar que el parametro "name" sera implicitamente "any", ya que, no puede saber que tipo de parametro es. Noosotros tenemos que ayudar a TS, a saber como manejar ese tipo.

```
function saludar(name :string) {
    console.log(`Hola ${name}`)
}
```
Diciendole de tipo es (en este caso String), TS puede ayudarnos con las inferencias.

***En JS, las funciones son de 'first class citizen', eso quiere decir que se pueden guardar como variable, se pueden usar como parámetro, etc....***

```
const sayHiFromFunction = (fn) => { 
    return fn('Lukas')
}

sayHiFromFunction((name: string) => { 
    console.log(`Hola ${name}`)
})
```
Esta función espera ser TIPADA, pero no podemos ponerle simplemente que es de de tipo **Function**, seria basicamente decirle que es "any" y pasarle cualquier tipo de función.

```
const sayHiFromFunction = (fn: (name: string) => void) => { 
    fn('Lukas')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)
```
Esta es la forma de TIPAR una función, como no devuelve nada le ponemos **void**. Aunque devolviera algo, no debería importar, con el **void** no habría problemas.

**<-Tipado de ARROW FUNCTIONS->**

```
const sumar = (a: number, b: number): number => {
    return a + b
}
```
Esta sería una forma de TIPAR, pero también se puede omitir, la inferencia va a ser implícita. Pero se puede optar por otra forma de TIPAR.

```
const restar: (a: number, b: number) => number = (a, b) => {
    return a - b
}
```
En este caso, indicamos los TIPO de la función, y luego ponemos la función. De todas formas, no esta tan legible como la primera opción.

Existe el tipado para las funciones que nunca van a devolver nada:

```
function throwError(message: string): never {
    throw new Error(message)
}
```
Se trata de una funcion para manejar errores, lo cual sabemos que no nos devolvera nada (diferencia con *void*), en ese caso utilizamos el tipo *never*. Porque sabemos que la función termina en THROW y no llega hasta el final, no hay *return* implicito.


## Objetos

Como ya sabemos, pueden tener inferencia de datos, pero pueden haber confusiones al crear los TIPOS, cuando justamente creamos un nuevo objeto. Para eso tenemos disponible los *Type Alias*

```
// Alias
type Hero = {
    name: string,
    age: number
}

let hero: Hero = {
    name: 'Thor',
    age: 1500
}
function createHero(name: string, age: number): Hero {
    return {
        name,
        age
    }
}

const thor = createHero('Thor', 1500)
```
***Usamos el PASCAL CASE para crear los ALIAS***
Lo encapsulamos en un contrato, en el cual le decimos como es el objeto que queremos crear, en este caso es de tipo *Hero*.

Dentro de nuestro objeto podemos tener propiedades opcionales, y lo podemos definir en nuestro *Alias*.

```
type Hero = {
    name: string,
    age: number,
    isActive?: boolean 
}
```
Con el símbolo de "?" lo hacemos opcional, o sea, podemos hacer uso de esa propiedad o no. 

Uno de los principales problemas que hay con JS, es la *mutabilidad*, esto quiere decir que, cualquiera puede venir a modificar, o *mutar*, algun campo o dato sin tener ningna restricción al intentarlo. 
Por supuesto, en TS se puede evitar esto al crear nuestros *Alias*.

```
type Hero = {
    readonly id?: number, // Hacemos que sea solo de lectura
    name: string,
    age: number,
    isActive?: boolean 
}
```
Agregamos la propiedad que sea solo de lectura, con el *readonly*. Ya no podemos acceder a esta propiedad sin que muestre un error si intentamos *mutarla*, pero sin embargo, no es inmutable, en tiempo de ejecución (es decir cuando se convierte en JS) el navegador no reconoce TS (como ya se mencionó), este ultimo nos ayuda a detectar esos errores. Se puede hacer inmutable, pero sería con utilizando codigo JS.

**<<<-Templates Union Types->>>>**

Dentro de la creacion de TYPES, también podemos crear otros TYPES dentro de estos.

```
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
    readonly id?: HeroId,
    name: string,
    age: number,
    isActive?: boolean 
}
```
Como la *id* de *Hero* va a ser un UUID, le decimos que el TYPE va a tener ese formato, y TS nos marcará como error si no mantenemos dicho formato de ID.

Puede resultar util cuando no recordamos la consistencia de ciertos caracteres, como por ejemplo, numeros hexadecimales.

```
type HexadecimalColor = `#${string}`
const color: HexadecimalColor = '0033ff' // -->Error: type '0033ff' is not assignable to type `#${string}`
const color2: HexadecimalColor = '#0033ff' // Ok, color
```
*No hay que tener en cuenta todo esto como una validación. Nada se ejecutará en la ejecución.*

**<<<-Union Types->>>>**

Se puede decir que es una union de TYPES. Lo que significa que, puede tener varias opciones de TYPES.

```
let annn : number | string

annn = true // -> Error: type 'boolean' is not assignable to type 'string | number'
 ```
TS nos marca un ERROR al no tratarse de un TYPE STRING o (*OR*) un TYPE NUMBER. No es que sea un TIPO, es un TIPO CONCRETO.

```
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' 

type Hero = {
    readonly id?: HeroId,
    name: string,
    age: number,
    isActive?: boolean,
    powerScale?: HeroPowerScale 
}

const thor = createHero('Thor', 1500)
thor.powerScale = 'multiversal'
```

Cuando empecemos a crear el OBJETO, nos mostrara todas las opciones que tenemos en los TIPOS CONCRETOS.

**<<<-Intersection Types->>>>**

Es diferente al UNION, dado que, aca estamos haciendo una INTERSECCION, es decir, es un TIPO y otro TIPO. Estamos utilizando un *AND*.

```
type HeroBasicInfo = {
    name: string,
    age: number
 }

 type HeroProperties = {
     readonly id?: HeroId,
     isActive?: boolean,
     powerScale?: HeroPowerScale 
 }

 type Hero = HeroBasicInfo & HeroProperties
```
Decirmos que, el *Type Hero*, debe contener *HeroBasicInfo* Y *HeroProperties*

**<<<-Type Indexing->>>>**

Nos permite usar partes de un Type.

```
type HeroProperties = {
    isActive: boolean,
    address: {
        planet: string,
        city: string
    }
}

const addressHero: HeroProperties['address'] = {   
    planet: 'Earth',
    city: 'Madrid'
 }
```
Cuando creamos *addressHero*, pudimos tomar parte del Type *HeroProperties* llamando a este mismo con el *index = address*.

**<<<-Type from value->>>>**

Podemos crear un Type a traves de una constante:

```
const address = {
    planet: 'Earth',
    city: 'Madrid'
}

type Address = typeof address
```
En JS, *typeof* es metodo para saber el TIPO. Cuando hacemos esto, y al crear otro objeto, este va a esperar las mismas propiedades que la constante de donde sacamos los TIPO.

```
const addressTwitch: Address = {
    planet: 'Mars',
    city: 'Twitch'
}
```
Ya podemos crear Types a partir de código que ya tengamos.

**<<<-Type from function return->>>>**

Podemos recupear el Type de lo que retorna una función. Esto es un *utility*.

```
function createAddress() {
    return {
        planet: 'Earth',
        city: 'Madrid'
    }
}

type Address = ReturnType<typeof createAddress>
```
Lo que devuelve la función *createAddress* lo utilizamos como el *Type Address*, mediante el *ReturnType* para guardar ese TIPO.


## Arrays

Al no TIPAR correctamente nuestro ARRAY, nos dira que es de *Type: Never*, o sea, que siempre tiene que estar vacío.

```
// Arrays
const languages = []

languages.push('JavaScript') // Argument of type 'string' is not assignable to parameter of type 'never'.
```
Lo TIPAMOS.

```
const languages: string[] = []

languages.push('JavaScript')
```
Hasta aca puede funcionar, es un ARRAY de STRINGS y no tendrá problemas de añadir un elemento más. Pero en cuanto le intentemos poner un *Type: number* (o cualquier otro *Type*), ahi nos dará un ERROR en TS.
Para estos casos, es necesario utilizar una UNION de *Types*, pero dentro un parentesis.

```
const languagesMixedArray: (string | number)[] = []
languagesMixedArray.push('Java')
languagesMixedArray.push(2)
```
Es posible crear un ARRAY con nuestro propios TIPOS.

```
type HeroBasicInfo = {
    id?: number,
    name: string,
    age: number
}

const herosWithBasicInfo: HeroBasicInfo[] = []
```

**<--Array de Arrays-->**

Esta seria la forma de darle un correcto tipado a un ARRAY, que a su vez, contiene varios ARRAYS.

```
const gameBoard:  string[][] = [
    ['X', 'O', 'X'], 
    ['O', 'X', 'O'], 
    ['X', '', 'O']   
] 
```
**Ta-te-ti**
En este caso, queremos que en este ARRAY solo admita elementos tales como: 'X', 'O' o '' (espacio vacío). Pero si intentamos agregarle cualquier otro valor, no había problema en este momento, después de todo, tan solo es un ARRAY de ARRAYS, que admite valores STRING.

Para solucionar esto, TIPAMOS los *Types* que irán dentro de las celdas.
```
type CellValue = 'X' | 'O' | '' 

const gameBoard:  CellValue[][] = [
    ['X', 'O', 'X'], 
    ['O', 'X', 'O'], 
    ['X', '', 'O']   
] 

gameBoard[0][1] = 'X'
```




