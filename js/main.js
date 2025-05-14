"use strict";

/*= [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
  
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

/*const renderTasks = (tasks) => {
const html = `<li> $ (tasks) </li>`; 
return html;
}


let html = ""; 



console.log (tasksUl);


for (const task of tasks) {
  tasksUl.innerHTML += `<li>${task.name}</li>`;
  
}*/

const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks-cache"));
console.log(tasksLocalStorage);

//DOCUMENT QUERY SELECTOR

const tasksUl = document.querySelector(".js-task-list");
const taskInput = document.querySelector(".js_taskInput");
const saveBtn = document.querySelector(".js_saveBtn");
const descInput = document.querySelector(".js_descInput");
//VARIABLES DE DATOS

const GITHUB_USER = "paulactc";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

//VARIABLE ARRAY
let tasks = [];

//FETCH GET

//FUNCION MANEJADORA
const handleNewTask = (event) => {
  event.preventDefault();

  const task = taskInput.value;
  const taskDesc = descInput.value;

  const newTask = {
    id: tasks.length,
    name: task,
    completed: false
  };

  //enviar info
  // FETCH POST
  fetch(`https://dev.adalab.es/api/todo/${GITHUB_USER}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  })
    .then((res) => res.json())
    .then((dataResponseSave) => {
      console.log(dataResponseSave);
      tasks.push(newTask);
      localStorage.setItem('tasks-cache', JSON.stringify( tasks ) );
      tasksUl.innerHTML = "";

      for (const task of tasks) {
        tasksUl.innerHTML += `<li>${task.name} </li>`;
        console.log(task.name);
      }
    });
};

//EVENTO DE ESCUCHA
saveBtn.addEventListener("click", handleNewTask);

//CONDICIONAL SERVIDOR

if (tasksLocalStorage !== null) {
tasks = tasksLocalStorage
  for (const task of tasks) {
        tasksUl.innerHTML += `<li>${task.name} </li>`;
        console.log(task.name);
      }
  
        } else {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      tasks = data.results;
      localStorage.setItem('tasks-cache', JSON.stringify( tasks ) );
      for (const task of tasks) {
        tasksUl.innerHTML += `<li>${task.name} </li>`;
        console.log(task.name);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
console.log('Esto ya estaría')