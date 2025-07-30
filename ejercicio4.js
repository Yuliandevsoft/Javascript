// 4. Validación de contraseña con intentos

// Escribe un programa que valide si la contraseña ingresada por el usuario coincide con una contraseña
// guardada. Permite hasta 3 intentos. Muestra un mensaje de éxito o de bloqueo según corresponda.

let clave = prompt("Digite su contraseña, tiene 3 intentos")
const keyguardada = ['101044','020224','030344'];
let intentos = 1
const maxIntentos = 3

function cantidad_intentos(){
while(intentos < maxIntentos){
if (keyguardada.includes(clave)){
    alert('Contraseña correcta ✅');
    break;
} else{
    alert('Lo siento, contraseña incorrecta ❌');
    clave = prompt("Digite su contraseña, denuevo ")
    
}
intentos++;
}
 if(intentos = maxIntentos && !keyguardada.includes(clave)){
        alert('Has excedido el número máximo de intentos 🚫');
    
 }
}
cantidad_intentos();
