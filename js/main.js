'use strict';



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

//DOCUMENT QUERY SELECTOR

const tasksUl=document.querySelector(".js-task-list");
const taskInput = document.querySelector('.js_taskInput');
const saveBtn = document.querySelector('.js_saveBtn');
const descInput = document.querySelector('.js_descInput');
//VARIABLES DE DATOS 

const GITHUB_USER = "paulactc";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

//VARIABLE ARRAY
let tasks =[];

//FETCH
fetch(SERVER_URL)
.then((response) =>
  response.json())
.then((data) =>{
  tasks=data.results 
  
  for (const task of tasks) {
  tasksUl.innerHTML += `<li>${task.name}</li>`;
  console.log(task.name);
}

});

//POST
const handleNewTask = (event) => {
  event.preventDefault();

  const task = taskInput.value;
  const taskDesc = descInput.value;

  const newTask = {
    name: task,
    desc: taskDesc,
  };

   fetch(
    `https://dev.adalab.es/api/todo/${GITHUB_USER}`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTask)
    }
  )
    .then(res => res.json())
    .then(dataResponseSave => {
      console.log(dataResponseSave);
      
    });
  
}
  // 4. Vuelve a pintar las tareas
;





//Completa el código;
//Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`
