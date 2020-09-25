// 0. .ts file will be compiled to .js file
/**
 * need to npm i -g typescript 
 * then tsc target.ts file
 */
async function hello () {
    console.log('watch hello ts');
}
// you will see bunch of code will be created to just use async await in ts
type Style = ' bold' | 'italic';

// type Style = 'bold' | 
let font: Style;
//tsconfig.json
// watch means hotreload when change anything in .ts file
// lib can 'dom', 'es2015' learn you 
// 1. import library 
/**
 * the library is bit of different than the others
 * for example loash, cnpm i @types/locash instead
 * 
 */
import * as _ from 'lodash';
// 2. compile ts => js
// 3. variable: explicit : any| string | number etc.
let me: any= 25 // explicit
me = '25' 
let her = 18 // number is redundent, implicit
// 4. object: inteface
interface Person {
    fast: number,
    slow: string,
    [key: string]: any
}

const person: Person = {
    fast: 111,
    slow: '111',
    middle: '111'+111,
    add: 'any'
}

const url = new URL() // you can see the source code when hover URL
// 5. function:
function pow(x: number, y : number) : string{
    return Math.pow(x, y).toString()
}

function pow2WithVoid(x: number, y : number) : void{
    Math.pow(x, y).toString()
}

// 6. array
const numberArray: number[] = [] // a number array and number only
// type MyListNotAssignable = [number, string, boolean] //tuple in other language like Python
// error that 
type MyList = [number?, string?, boolean?] //tuple in other language like Python
const tupleArray: MyList = []
const arr : Person[] = [] 

// 7. generics
/**
 * generics is a broad topic, right now let's focus on a sample examle here and discuss more later.
 */
class Observable<T>{
    constructor(public value: T) {
    }
}

let number: Observable<number>;
let object: Observable<Person>;
let number1 = new Observable(23)
