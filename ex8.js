/**
 * Bucles while
 *
 * Modifica el bucle while para que escriba por el terminal 
 * 5 veces exactamente "Ejecuto!". Actualmente lo escribe 6 veces. Por qué?
 * 
 * La condición del while era "i <= veces", lo que le otorgava 1 vuelta de más en el bucle.
 * 
 * Reestricción: NO puedes cambiar el valor de las variables 'veces' ni 'i' !!
 */

let veces = 5
let i = 0

while (i < veces) {
    console.log("Ejecuto!");
    i++;
}