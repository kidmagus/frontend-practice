

const form = document.querySelector(".todo");
const todoInput = document.querySelector(".todo__txtbox");
const todoList = document.querySelector(".todos__list");

let todoArr = JSON.parse(localStorage.getItem("items")) || [];

const updateLocalStorage = () => {
    localStorage.setItem("items", JSON.stringify(todoArr));

};




const renderElement = () => {

    todoList.innerHTML = " ";
 
  

    todoArr.forEach((todoContent, index) => {
        let addedTodo = document.createElement("p");
        addedTodo.textContent = todoContent;
        todoList.append(addedTodo);

        addedTodo.setAttribute("data-id", index)
      

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        addedTodo.append(deleteBtn)

       
        deleteBtn.addEventListener("click", () => { 
                    todoArr.splice(index, 1);
                    updateLocalStorage();
                    todoList.removeChild(addedTodo);
        })
      
    });
      

       
}


form.addEventListener("submit", event => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const todoContent = formData.get("todos");

    if (todoContent.length === 0){
        window.alert("Enter a To Do")
        return
    } else {
        todoArr.push(todoContent);
        updateLocalStorage();
        renderElement(todoContent);
    }
       
        todoInput.value = ""; 
 
});


renderElement();