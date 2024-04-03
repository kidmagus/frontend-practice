

const todo = document.querySelector(".txtbox");
const todoBtn = document.querySelector(".submit");
const todoList = document.querySelector(".todoList");

let todoArr = [];

todoBtn.addEventListener("click", () => {
    // const addedTodo = todo.value;
    
    // const listItem = document.createElement("li");
    // listItem.textContent = addedTodo;

    // const btnDelete = document.createElement("button");
    // btnDelete.textContent = "Delete";
    // btnDelete.addEventListener("click", () => {
    //     // Remove the parent <li> element when the delete button is clicked
    //     listItem.remove();
    //     // Remove the deleted item from the todoArr
    //     const index = todoArr.indexOf(addedTodo);
    //     if (index !== -1) {
    //         todoArr.splice(index, 1);
    //         console.log(todoArr);
    //     }
    // });

    // listItem.appendChild(btnDelete);

    // todoList.appendChild(listItem);

    // todoArr.push(addedTodo);
    
    // // Clear the input field after adding the to-do item
    // todo.value = '';

    // console.log(todoArr);
    const addedTodo = todo.value;
    
    
   
    
   
    const todoItem = document.createElement("p");
    todoItem.textContent = addedTodo;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className += "deleteBtn"
    deleteBtn.addEventListener("click", () => {
        todoItem.remove();
        const index = todoArr.indexOf(addedTodo);
        if (index !== 0){
            todoArr.splice(index, 1);
            console.log(todoArr)
        }
    })

    if (addedTodo.length === 0){
        window.alert ("You need a Todo Item first")
        
    }else {
        //Joining the button to the new item Element
        todoItem.appendChild(deleteBtn);

        //Appending the delBtn along with the text.value to Page
        todoList.appendChild(todoItem);

        // Pushing the value to Array
        todoArr.push(addedTodo);
    }


 

    todo.value = '';
    console.log(todoArr);
    console.log(todoList);
    


});

