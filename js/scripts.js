// Selecão dos elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


// Funções
const saveTodo = (text) => {

const todo = document.createElement("div");
todo.classList.add("todo");

const todoTitle = document.createElement("h3");
todoTitle.innerHTML = text;
todo.appendChild(todo.Title);

const doneBtn = document.createElement("button")
doneBtn.classList.add("finish-todo")
doneBtn.innerHTML = '  <i class="fa-solid fa-check"></i>'
todo.appendChild(editBtn)

const editBtn = document.createElement("button")
editForm.Btn.classList.add("finish-todo")
editForm.Btn.innerHTML = '  <i class="fa-solid fa-check"></i>'
todo.appendChild(editForm.Btn)

const doneBtn = document.createElement("button")
doneBtn.classList.add("finish-todo")
doneBtn.innerHTML = '  <i class="fa-solid fa-check"></i>'
todo.appendChild(editBtn)






};



// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
   
   
    const inputValue = todoInput.ariaValueMax
   
   if (inputValue) {
    saveTodo(inputValue)
   
   }
   })
   
   