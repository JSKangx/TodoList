const toDoForm = document.querySelector("#todo_form");
const toDoList = document.querySelector("#todo_list");
const input = document.querySelector("#todo_form input");

const toDos = [];

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function saveToDos() {
  localStorage.setItem("todos", toDos);
}

function addList() {
  const newList = document.createElement("li");
  const myTodo = input.value;
  newList.innerText = myTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  newList.appendChild(button);
  toDoList.appendChild(newList);
  input.value = "";
  toDos.push(myTodo);
}

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addList();
  saveToDos();
});
