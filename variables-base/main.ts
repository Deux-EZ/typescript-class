/**
 * Typescript es un superconjunto de JavaScript que añade tipos estáticos y otras características.
 * Permite detectar errores en tiempo de compilación y mejorar la calidad del código.
 * Además, TypeScript es compatible con JavaScript, lo que significa que puedes usar cualquier código JavaScript válido en un archivo TypeScript.
 * Typescript es un lenguaje compilado, lo que significa que el código TypeScript se convierte en JavaScript antes de ejecutarse.
 * Esto permite que el código TypeScript se ejecute en cualquier entorno que soporte JavaScript, como navegadores web y servidores Node.js.
 */


/**
 * Algo parecido pasa en python, tiene tipos dinámicos, pero también tiene tipos estáticos.
 * Esto significa que puedes declarar variables sin especificar su tipo, y el intérprete de Python inferirá el tipo en tiempo de ejecución.
 * Sin embargo, Python también permite la anotación de tipos, lo que significa que puedes especificar el tipo de una variable al declararla.
 * Esto es útil para la documentación y la verificación de tipos en tiempo de ejecución
 */
const nombre: string = "Santiago";
console.log("Hola," + nombre);
/**
 * Siguiendo con las comparaciones con Python, es muy parecido al f´string de Python.
 * En Python, puedes usar f-strings para incrustar expresiones dentro de cadenas de texto.
 * Esto se hace colocando una "f" antes de la cadena y usando llaves para delimitar las expresiones.
 * En TypeScript, puedes usar plantillas de cadena (template strings) para hacer lo mismo.
 */

console.log(`Hola, ${nombre}`);

/**
 * Para las variables primitivas, tenemos las siguientes:
 */

let apellido: string = "González"; // string
let edad: number = 30; // number
let esDesarrollador: boolean = true; // boolean
let mes: string | undefined 
let variableNule: null = null; // null
// let simbolo: symbol = Symbol("Mi simbolo");

/**
 * Tenemos otros tipos de variables primitivas, como el tipo "any", que permite almacenar cualquier tipo de dato.
 * Sin embargo, su uso no es recomendable, ya que anula las ventajas de TypeScript.
 * En su lugar, es mejor usar tipos específicos o uniones de tipos.
 * Por ejemplo, si quieres permitir que una variable pueda ser un número o una cadena, puedes usar el tipo "number | string".
 * Esto significa que la variable puede ser un número o una cadena, pero no ambos al mismo tiempo.
 * Esto es útil para la documentación y la verificación de tipos en tiempo de ejecución
 */

let variableDinamica: any = "Hola"; // any
variableDinamica = 30; // Cambiamos el tipo a number
variableDinamica = true; // Cambiamos el tipo a boolean
variableDinamica = null; // Cambiamos el tipo a null
variableDinamica = undefined; // Cambiamos el tipo a undefined

/**
 * Throws an error with a specified message and never returns.
 *
 * The `never` type in TypeScript is used to represent values that never occur.
 * This is commonly used for functions that always throw an error or functions
 * that never terminate (e.g., infinite loops). In this case, the `throwError`
 * function is explicitly typed as `never` because it will always throw an error
 * and will not return any value.
 *
 * @throws {Error} Always throws an error with the message "Soy un bug".
 */

function throwError(): never {
    throw new Error("Soy un bug")
}

// console.log(throwError()) // Esto nunca se ejecutará

function logError(): void {
    console.log("Hola, soy un log");
} 