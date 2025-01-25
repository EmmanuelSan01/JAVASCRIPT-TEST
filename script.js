const add = document.getElementById("add");
const todo = document.getElementById("to-do");
const doing = document.getElementById("doing");
const done = document.getElementById("done");

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const startDate = document.getElementById("startDate");
const finishDate = document.getElementById("finishDate");
const col = document.getElementById("col");

loadTasks();

function addTask() {
  const task = title.value.trim();

  if (task) {
    createTaskElement(task);
    title.value = "";
    saveTasks();
  } else {
    alert("Agregue una descripción");
  }
}

add.addEventListener("click", addTask);

function createTaskElement(task) {
  const listItem = document.createElement("li");
  const taskText = document.createElement("p");
  const buttonContainer = document.createElement("div");
  const deleteButton = document.createElement("button");
  const moveForward = document.createElement("button");
  const moveBack = document.createElement("button");

  taskText.textContent = ("Título:" + task + "descripción:" + desc.value.trim() + "Fecha de inicio:" + startDate.value.trim() + "Fecha de fin:" + finishDate.value.trim());
  listItem.appendChild(taskText);

  function showButtons () {
    deleteButton.textContent = String.fromCodePoint(0x2716);
    deleteButton.className = "button";
    deleteButton.id = "delete";
    moveForward.textContent = String.fromCodePoint(0x27A1);
    moveForward.className = "button";
    moveForward.id = "right";
    moveBack.textContent = String.fromCodePoint(0x2B05);
    moveBack.className = "button";
    moveBack.id = "left";
    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(moveBack);
    buttonContainer.appendChild(moveForward);
  }

  const colName = col.value;
  if (colName === "to-do") {
    todo.appendChild(listItem);
  } else if (colName === "doing"){
    doing.appendChild(listItem);
  } else if (colName === "done") {
    done.appendChild(listItem);
  }
  
  saveTasks();
  showButtons();

  moveForward.addEventListener("click", function () {
    const listName = listItem.parentElement.id;
    if (listName === "to-do") {
      doing.appendChild(listItem);
    } else if (listName === "doing"){
      done.appendChild(listItem);
    }
  });

  moveBack.addEventListener("click", function () {
    const listName = listItem.parentElement.id;
    if (listName === "done") {
      doing.appendChild(listItem);
    } else if (listName === "doing"){
      todo.appendChild(listItem);
    }    
  });

  deleteButton.addEventListener("click", function () {
    const listName = listItem.parentElement.id;
    if (listName === "to-do") {
      todo.removeChild(listItem);
    } else if (listName === "doing"){
      doing.removeChild(listItem);
    } else if (listName === "done") {
      done.removeChild(listItem);   
    }
    saveTasks();
  });
}

function saveTasks() {
  let tasks = [];

  todo.querySelectorAll("li").forEach(function (item) {
    const taskText = item.childNodes[0].textContent;
    tasks.push(taskText);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(createTaskElement);
  console.log(tasks);
}