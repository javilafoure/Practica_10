const registro = document.querySelector('#tb-registro');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const trash = document.querySelector('.btn-trash')



const active = '';
const complete = '';

getdata();


/* Los siguientes nombres de funciones son una sugerencia de funciones que necesitarás en tu programa,
sin embargo, no te limites solo a estas funciones. Crea tantas como consideres necesarias.

La estructura de cada objeto "tarea" es la siguiente:

{
  id: 1,
  title: "tarea",
  completed: false
}


*/

btn1.addEventListener('click', showAll);
btn2.addEventListener('click', filterUncompleted)
btn3.addEventListener('click', filterCompleted)
trash.addEventListener('click', deleteAll)

// getdata()
async function getdata() {
  registro.innerHTML = ''
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonData = await data.json()
    // console.log(jsonData);
    return jsonData;

  } catch (e) {
    alert(e.message)
  }
}


// Función para añadir una nueva tarea
function addTask() {

}

// Función para marcar una tarea como completada o imcompleta (Puede ser la misma función)
function completeTask() {

}

// Función para borrar una tarea
function deleteTask() {

}

// Funcion para borrar todas las tareas
function deleteAll() {
  registro.innerHTML = ''
}

//funcion para traer todos los elementos
async function showAll() {
  registro.innerHTML = ''
  showBtn();
  const jsonData = await getdata();
  // console.log(jsonData);

  jsonData.forEach(el => {

    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const label = document.createElement('label');


    label.innerText = el.title;

    li.append(checkbox, label);
    registro.appendChild(li)



  });
}

// Función para filtrar tareas completadas
async function filterCompleted() {
  registro.innerHTML = ''
  showBtn();

  const jsonData = await getdata();
  console.log(jsonData);

  jsonData.forEach(el => {

    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const label = document.createElement('label');

    if (el.completed === true) {
      label.innerText = el.title;

      li.append(checkbox, label);
      registro.appendChild(li)
    }


  });


}

// Función para filtrar tareas incompletas
async function filterUncompleted() {
  hiddenBtn();
  registro.innerHTML = ''
  
  const jsonData = await getdata();
  console.log(jsonData);

  jsonData.forEach(el => {

    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const label = document.createElement('label');

    if (el.completed === false) {
      label.innerText = el.title;

      li.append(checkbox, label);
      registro.appendChild(li)
    }


  });
}

function selectTab(selectedTab) {
  // Elimina la clase 'active' de todas las pestañas
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // Agrega la clase 'active' a la pestaña seleccionada
  selectedTab.classList.add('active');
}

function showBtn(){
  trash.classList.remove('hidden');
}

function hiddenBtn(){
  trash.classList.add('hidden');
}