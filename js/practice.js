const boxes = document.querySelectorAll('.box')

boxes.forEach((box) => {
    const header  = box.querySelector('.box__header');

    if (header){
        header.addEventListener('click', (event) => {
         box.classList.toggle('box--expanded');
        });
    }
})