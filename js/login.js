const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function showGreeting(username) {
  greeting.innerText = `HELLO ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

function onSubmit(e) {
  e.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY, userName);
  showGreeting(username);
}

if (!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onSubmit);
} else {
  showGreeting(savedUsername);
}
