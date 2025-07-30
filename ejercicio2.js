// 2. Control de acceso a una fiesta

// Un local nocturno permite la entrada solo a personas mayores de edad (18+) y que no estén en una lista
// negra. Solicita al usuario su edad y nombre. Evalúa ambas condiciones y muestra un mensaje de bienvenida
// o rechazo.

let nombre = prompt("Por favor, ingresa tu nombre:");
let Minusculas = nombre.toLowerCase();
let edad = prompt("Por favor, ingresa tu edad:");
edad = Number(edad)
const nopasan = ["pamela", "pedrito", "juan", "guillermo"];

if (nopasan.includes(Minusculas)){
    console.log('Lo siento no puedes entrar, estas en la lista negra');
} else if (edad >= 18){
    console.log('Bienvenido a la fiesta: '+ nombre);
    
}else{
    console.log('Eres menor de edad no puedes entrar mijo');
}
