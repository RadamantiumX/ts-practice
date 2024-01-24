// Arrays
const languages: string[] = [] // Alt #1
const languagesArray: Array<string> = [] // Alt #2
const languagesMixedArray: (string | number)[] = [] // Alt #3 Array mixto, puede ser de String o de Number


languages.push('JavaScript')
languagesMixedArray.push(2)

type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'  

type HeroBasicInfo = {
    id?: number,
    name: string,
    age: number
}

const herosWithBasicInfo: HeroBasicInfo[] = []

// ----------------------------------------------------------------

/*
Tenemos el siguiente Array de Arrays, que son Strings
[
    ['X', 'O', 'X'], <-- String[]
    ['O', 'X', 'O'], <-- String[]
    ['X', '', 'O']   <-- String[]
]
*/
type CellValue = 'X' | 'O' | '' // Tipamos los Types que pueden haber dentro de las celdas

const gameBoard:  CellValue[][] = [
    ['X', 'O', 'X'], 
    ['O', 'X', 'O'], 
    ['X', '', 'O']   
] 

gameBoard[0][1] = 'X'