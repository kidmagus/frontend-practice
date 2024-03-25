const box = document.querySelectorAll('.box');

box.forEach((box) => {
    const boxInfo = box.querySelector('.box__info')

    if (boxInfo){
        boxInfo.addEventListener("click", (event) =>{
        box.classList.toggle('expanded');
        });


    }
})