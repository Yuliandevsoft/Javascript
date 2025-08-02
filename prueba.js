

////////////////////////////////////////////////////////

const names = [];
const nameCounts = {}; // contador por nombre
// const inputName = document.getElementById('inputName');
// const addBtn = document.getElementById('addBtn');
// const randomBtn = document.getElementById('randomBtn');
// const nameList = document.getElementById('nameList');

function renderList(selectedIndex = null) {
  nameList.innerHTML = '';
  names.forEach((name, index) => {
    const li = document.createElement('li');
    li.id = `name-${index}`; // ID único
    if (index === selectedIndex) {
      const count = nameCounts[name] || 0;
      li.textContent = `${name} - se ha elegido: ${name}, cantidad: ${count}`;
      li.classList.add('selected');
    } else {
      li.textContent = name;
    }
    nameList.appendChild(li);
  });
}

function addName() {
  const name = inputName.value.trim();
  if (name) {
    names.push(name);
    nameCounts[name] = 0; // inicializa el contador
    inputName.value = '';
    renderList();
  }
}

function aleatorio() {
  if (names.length === 0) return;
  const randomIndex = Math.floor(Math.random() * names.length);
  const selectedName = names[randomIndex];
  nameCounts[selectedName] = (nameCounts[selectedName] || 0) + 1;
  renderList(randomIndex);
}

//Usando addEventListener

// addBtn.addEventListener('click', () => {
//   const name = inputName.value;
//   if (name) {
//     names.push(name);
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



