const todo = document.querySelector(".todo__txtbox");
const todoBtn = document.querySelector(".todo__submit-btn");
const todoList = document.querySelector(".todoList");
//Array for every enlisted item




    let todoArr = JSON.parse(localStorage.getItem('todos'))

    document.body.append(todoArr)
    

    
todoBtn.addEventListener("click", () => {
 
    // Get the value on textbox
  
    const addedTodo = todo.value; 
  

    // CreateDiv for every enlisted item
    const todoContent = document.createElement("p");
    todoContent.textContent = addedTodo;
    todoContent.className += "todo__content";
    

    const todoContainer = document.createElement("div");
    todoContainer.className += "todo__container";



    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "&#10004; DONE"
    doneBtn.className += "todo__done-btn";
    doneBtn.addEventListener("click", () => {
        


        if ( doneBtn.classList.contains('active__donebtn')){
            deleteBtn.classList.remove('active__deletebtn')
            doneBtn.classList.remove('active__donebtn')
            doneBtn.innerHTML = "&#10004; DONE"
            todoContent.classList.remove('active__content') 
            todoContainer.classList.remove('active__container')
 
        } else {
            deleteBtn.classList.add('active__deletebtn')
            doneBtn.classList.add('active__donebtn')
            doneBtn.innerHTML = "UNDO"
            todoContent.classList.add('active__content')
            todoContainer.classList.add('active__container')

        } 
        
    })
   
   
    
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
        // Append 

        todoList.append(todoContainer)
        todoContainer.append(todoContent);
        todoContainer.append(doneBtn);
        todoContainer.append(deleteBtn);
        todoArr.push(addedTodo);
       
         localStorage.setItem("todos", JSON.stringify(todoArr));
       
      
       
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


