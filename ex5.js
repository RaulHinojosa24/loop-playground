/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca. 
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 * 
 * No se ejecuta porque "i" es igual a "veces", por lo que ni siquiera entra al bucle, ya que la condición de entrar el bucle es que "i" sea más bajo que "veces".
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces. 
 * Reestricción: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

let veces = 15;

for (let i = 5; i < veces; i++) {
    console.log("No me voy a ejecutar..." + i)
}