let tasks = [];
let tasksCompleted = [];

//render
let renderTask = (tasks) => {
  let content = "";
  tasks.map((task, index) => {
    content += `
                  <li class="tasks" >
                  <div class="task-name">${task.name}</div>
                  <div>
                  <button onclick="deleteTask(${index})" class="btn"><i class="fa-solid fa-trash"></i></button>
                  <button class="btn" onclick="complete('${task.name}')"><i class="fa-solid fa-circle-check"></i></button>
                  </div>
                 
                  </li>
          `;
  });
  document.getElementById("todo").innerHTML = content;
};

//local
let setLocalStorage = (tasks) => {
  localStorage.setItem("taskList", JSON.stringify(tasks));
};
let getLocalStorage = () => {
  if (localStorage.getItem("taskList") != undefined) {
    tasks = JSON.parse(localStorage.getItem("taskList"));
  } else {
    tasks = [];
  }
  renderTask(tasks);
};
getLocalStorage();

//add
let addTasksList = () => {
  let inputFeild = document.querySelector("#newTask").value;

  if (inputFeild == "") {
    alert("Please, enter task name!");
    return false;
  }

  tasks.push({ name: inputFeild });
  document.querySelector("#newTask").value = "";
  renderTask(tasks);

  setLocalStorage(tasks);
};
document.getElementById("addItem").onclick = addTasksList;

//check
let complete = (name) => {
  tasks.map((task) => {
    if (task.name === name) {
      tasksCompleted.push(task);
    }
  });

  tasks = tasks.filter((task) => task.name !== name);
  setLocalStorage(tasks);
  getLocalStorage();

  let content = "";

  tasksCompleted.map((task, index) => {
    content += `
                  <li class="tasks" >
                  <div class="task-name">${task.name}</div>
                  <div>
                  <button style="color:#eee;" onclick="deleteComplete('${index}')" class="btn"><i class="fa-solid fa-trash"></i></button>
                  <button style="color:green;" class="btn" onclick="complete('${task.name}')"><i class="fa-solid fa-circle-check"></i></button>
                  </div>
                 
                  </li>
          `;
  });

  document.getElementById("completed").innerHTML = content;
};

let deleteTask = (index) => {
  if (confirm("Do you really want to delete")) {
    tasks.splice(index, 1);
    setLocalStorage(tasks);
    getLocalStorage();
  }
};

let deleteComplete = (index) => {
  if (confirm("Do you really want to delete")) {
    getLocalStorage(tasksCompleted);
    tasksCompleted.splice(index, 1);
    setLocalStorage(tasksCompleted);
    complete(name);
  }
};

let sortNameAtoZ = () => {
  let sortNameAZ = [];
  tasks.map((task) => {
    sortNameAZ.push(task.name);
  });
  sortNameAZ.sort();
  let content = "";
  sortNameAZ.map((task, index) => {
    content += `
      <ul>
            <li class="tasks" >
            <div class="task-name">${task}</div>
            <div>
            <button onclick="deleteTask(${index})" class="btn"><i class="fa-solid fa-trash"></i></button>
            <button class="btn" onclick="complete('${task}')"><i class="fa-solid fa-circle-check"></i></button>
            </div>
            </li>
      </ul>
    `;
  });
  
  document.getElementById("todo").innerHTML = content;
};
document.getElementById("two").onclick = sortNameAtoZ;



let sortNameZtoA = () => {
  let sortNameAZ = [];
  tasks.map((task) => {
    sortNameAZ.push(task.name);
    sortNameAZ.sort();
  });
  sortNameAZ.reverse();
  let content = "";
  sortNameAZ.map((task, index) => {
    content += `
      <ul>
            <li class="tasks" >
            <div class="task-name">${task}</div>
            <div>
            <button onclick="deleteTask(${index})" class="btn"><i class="fa-solid fa-trash"></i></button>
            <button class="btn" onclick="complete('${task}')"><i class="fa-solid fa-circle-check"></i></button>
            </div>
            </li>
      </ul>
    `;
  });
  
  document.getElementById("todo").innerHTML = content;
};
document.getElementById("three").onclick = sortNameZtoA;