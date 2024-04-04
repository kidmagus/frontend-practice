const todo = document.querySelector(".todo__txtbox");
const todoBtn = document.querySelector(".todo__submit-btn");
const todoList = document.querySelector(".todoList");
//Array for every enlited item
let todoArr = [];




todoBtn.addEventListener("click", () => {
 
    // Get the value on textbox
    const addedTodo = todo.value; 

    // CreateDiv for every enlisted item
    const todoContent = document.createElement("p");
    todoContent.textContent = addedTodo;
    todoContent.className += "todo__content"

    const todoContainer = document.createElement("div");
    todoContainer.className += "todo__container";
  
    
    // Create Btn and its Function
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.className += "todo__delete-btn";

    deleteBtn.addEventListener("click", () => {
      todoContainer.remove();
      const index = todoArr.indexOf(addedTodo);
    //Checks if the element or substring was found
      if (index !== -1){
        todoArr.splice(index, 1);
      }
    })




    // If textbox has no content and proceed to click the "Add-Btn"
    if(addedTodo.length === 0){
        window.alert ("Insert a To Do first")
        return
    } else {
        //Append 
        todoList.appendChild(todoContainer)
        todoContainer.append(todoContent);
        todoContainer.append(deleteBtn);
        todoArr.push(addedTodo)

  
    
    }
    //Reset the textbox
    todo.value = '';


    //For debugs
    console.log(todoContent)
    console.log(todoArr)
})
    

todo.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        todoBtn.click();
    }
})

