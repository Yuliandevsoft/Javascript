// 3. Comparación de edades

// Pide la edad de dos personas. Tu programa debe comparar ambas edades y mostrar cuál persona es
// mayor, o si tienen la misma edad.

let edad= prompt("Por favor, ingresa tu edad persona 1:");
let edad2 = prompt("Por favor, ingresa tu edad persona 2:");

if(edad  > edad2){
    console.log("Persona 1 es mayor que Persona 2")

} else if (edad < edad2){
 console.log("Persona 2 es mayor que Persona 1")

}else{
    console.log("Tienen la misma edad")
}