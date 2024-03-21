const box = document.querySelectorAll('.box');

box.forEach((box) => {
    const onToggle = box.querySelector('button')

    if (onToggle){
        onToggle.addEventListener("click", (event) =>{
        box.classList.toggle('expanded');
        });


    }
})