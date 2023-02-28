const toDoForm = document.querySelector("#todo_form");
const toDoList = document.querySelector("#todo_list");
const input = document.querySelector("#todo_form input");

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newList = document.createElement("li");
  const myTodo = input.value;
  newList.innerText = myTodo;
  toDoList.appendChild(newList);
  input.value = "111";
});
