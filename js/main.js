let tasks = [];

let renderTask = (tasks) => {
  let content = "";
  tasks.map((task) => {
    content += `
                  <li>
                  <div class="task-name">${task.name}</div>
                  <button class="btn"><i class="fa-solid fa-trash"></i></button>
                  </li>
          `;
  });
  document.getElementById("todo").innerHTML = content;
};

let setLocalStorage = () => {
  localStorage.setItem("taskList", JSON.stringify(tasks));
}
let getLocalStorage = () => {
  if (localStorage.getItem("taskList") != undefined) {
    tasks = JSON.parse(localStorage.getItem("taskList"));
  }
  renderTask(tasks);
}
getLocalStorage();

let addTasksList = () => {
  let inputFeild = document.querySelector("#newTask").value;

  if (inputFeild.trim() === "") {
    alert("Please, enter task name!");
    return false;
  }

  tasks.push({ name: inputFeild });
  document.querySelector("#newTask").value = "";
  renderTask(tasks);
  // set
  setLocalStorage();
};
document.getElementById("addItem").onclick = addTasksList;
