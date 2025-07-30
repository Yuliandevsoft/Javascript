// 7. Mostrar día de la semana

// Solicita al usuario un número del 1 al 7 y muestra el día de la semana correspondiente. Asegúrate de
// manejar correctamente los valores inválidos.
let semana = prompt("Ingresa un número del 1 al 7:");
semana = Number(semana);
let dia;
switch (semana) {
  case 1:
    dia = "Lunes";
    break;
  case 2:
    dia = "Martes";
    break;
  case 3:
    dia = "Miercoles";
    break;
  case 4:
    dia = "Jueves";
    break;
  case 5:
    dia = "Viernes";
    break;
  case 6:
    dia = "Sabado";
    break;
  case 7:
    dia = "Domingo";
    break;
  default:
    dia = "❌Numero de dia invalido❌, la semana solo tiene 7 dias";
}

alert(dia);
