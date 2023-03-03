const toDoForm = document.querySelector("#todo_form");
const toDoList = document.querySelector("#todo_list");
const input = document.querySelector("#todo_form input");

let toDos = [];

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem("todos");

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(addList);
  toDos = parsedToDos;
}

function addList(myTodo) {
  const newList = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = myTodo.text;
  newList.id = myTodo.id;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add("margin-left");
  button.addEventListener("click", deleteToDo);
  newList.appendChild(span);
  newList.appendChild(button);
  toDoList.appendChild(newList);
}

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const myTodo = input.value;
  input.value = "";
  const myTodoObj = {
    text: myTodo,
    id: Date.now(),
  };
  addList(myTodoObj);
  toDos.push(myTodoObj);
  saveToDos();
});
