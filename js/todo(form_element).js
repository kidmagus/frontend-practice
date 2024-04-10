const form = document.querySelector(".todo")
const todo = document.querySelector(".todo__txtbox")
const todoSubmit = document.querySelector(".todo__submit");
const todoList = document.querySelector(".todo__list")

let todoArr = JSON.parse(localStorage.getItem("items")) || [];


const updateLocalStorage = () => {
    // let data = localStorage.getItem('items');

    // let parsedData = JSON.parse(data);

    // console.log(data);
    // console.log(parsedData)
 
    localStorage.setItem("items", JSON.stringify(todoArr))
   
}
    
const p = document.createElement("p");
p.textContent= "todoContent";
todoList.appendChild(p)

form.addEventListener("submit", (event) => {
   

    event.preventDefault();
    const todos = new FormData(form);
    const todoContent = todos.get("todos");
    
    todoArr.push(todoContent);
    // todoContent.append(todos)
    // todoList.append(todoContent)
   

  
    updateLocalStorage();

    console.log(todoArr);

   
});

