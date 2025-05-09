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
var nombre = "Santiago";
console.log("Hola," + nombre);
/**
 * Siguiendo con las comparaciones con Python, es muy parecido al f´string de Python.
 * En Python, puedes usar f-strings para incrustar expresiones dentro de cadenas de texto.
 * Esto se hace colocando una "f" antes de la cadena y usando llaves para delimitar las expresiones.
 * En TypeScript, puedes usar plantillas de cadena (template strings) para hacer lo mismo.
 */
console.log("Hola, ".concat(nombre));
