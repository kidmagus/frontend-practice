const form = document.querySelector(".todo");
const todoInput = document.querySelector(".todo__txtbox");
const todoList = document.querySelector(".todo__list");

let todoArr = JSON.parse(localStorage.getItem("items"));

const updateLocalStorage = () => {
  localStorage.setItem("items", JSON.stringify(todoArr));
};

const renderElement = () => {
  todoList.innerText = " ";

  todoArr.forEach((todoContent, index) => {
    let addedTodo = document.createElement("p");
    addedTodo.textContent = todoContent;

    let addedTodoList = document.createElement("div");
    addedTodoList.append(addedTodo);
    addedTodoList.className += "todo__items";

    todoList.append(addedTodoList);
    addedTodoList.setAttribute("data-id", index);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className += "todo__deletebtn";
    addedTodoList.append(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(addedTodoList);
      todoArr.splice(index, 1);
      updateLocalStorage();
      renderElement();
    });
  });
};

renderElement();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const todoContent = formData.get("todos");

  if (todoContent.length === 0) {
    window.alert("Enter a To Do");
  } else {
    todoArr.push(todoContent);
    updateLocalStorage();
    renderElement();
  }

  todoInput.value = "";
});
