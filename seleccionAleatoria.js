// Pasos:

// Crea un evento que se active al hacer clic en el botón «Agregar». Este evento debe
// llamar a una función que obtenga el valor del input, agregue el nombre a una lista en
// memoria y luego actualice la lista visible en el DOM.

// Crea una función para renderizar los nombres en la lista. Esta función debe actualizar
// el contenido del elemento <ul> con los nombres almacenados en la lista en
// memoria.

// Crea un evento que se active al hacer clic en el botón «Seleccionar aleatoriamente».
// Esta función debe seleccionar aleatoriamente un nombre de la lista en memoria y
// resaltarlo en la lista visible en el DOM. Además, se debe mostrar un mensaje indicando
// que se ha elegido ese nombre.

// Verifica que el programa funcione correctamente. Al hacer clic en el botón «Seleccionar
// aleatoriamente», debe aparecer un nombre resaltado en la lista con el mensaje indicando
// que ha sido seleccionado aleatoriamente.

// const inputName = document.getElementById('inputName');
// const addBtn = document.getElementById('addBtn');

const names = [];
const contador = {};

const input = document.getElementById("inputName");
const boton = document.getElementById("addBtn");
const randomBtn = document.getElementById('randomBtn');
const nameList = document.getElementById('nameList');


function renderList() {
  nameList.innerHTML = "";
  for (const name of names) {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  }
}

function addName() {
  const name = inputName.value;
  if (name) {
    names.push(name);
    inputName.value = "";
    renderList();
  }
}

function aleatorio() {
  if (names.length === 0) return;
  //const randomIndex = Math.floor(Math.random() * names.length);
  
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  const randomIndex = array[0] % names.length;

  let selectedName = names[randomIndex];
  if (contador[selectedName]) {
    contador[selectedName]++;
  } else {
    contador[selectedName] = 1;
  }

  nameList.innerHTML = "";

  names.forEach((name, index) => {
    const li = document.createElement("li");
    if (index === randomIndex) {
      li.textContent = `${name} - se ha elegido: ${contador[name]} veces`;
      li.classList.add("selected");
    } else {
      if (!contador[name]) {
        li.textContent = name;
      } else {
        li.textContent = name + " - Seleccionado: " + contador[name];
      }
    }
    nameList.appendChild(li);
  });
}

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addName();
  }
});

addBtn.onclick = addName;
randomBtn.onclick = aleatorio;

//quita el onclick de html y hazlo desde aca desde el javascript el llamado (listo)
//arregla el contador para que funcione (listo)
// que al presionar enter funcione la tecla al agregar

// addBtn.addEventListener('click', () => {
//   const name = inputName.value;
//   if (name) {
//     names.push(name);s
//     inputName.value = '';
//     renderList();
//   }
// });

// randomBtn.addEventListener('click', () => {
//   if (names.length === 0) return;
//   const randomIndex = Math.floor(Math.random() * names.length);
//   nameList.innerHTML = '';
//   names.forEach((name, index) => {
//     const li = document.createElement('li');
//     if (index === randomIndex) {
//       li.textContent = `${name} - se ha elegido: ${name}`;
//       li.classList.add('selected');
//     } else {
//       li.textContent = name;
//     }
//     nameList.appendChild(li);
//   });
// });
