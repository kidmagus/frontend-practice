
const singleBoxes = document.querySelectorAll(".single");

singleBoxes.forEach(box => {
  box.addEventListener("click", event => {
    if (box.classList.contains('expanded')) {
      box.classList.remove("expanded");
    } else {
      document.querySelector(".box.expanded")?.classList.remove("expanded");
      box.classList.add("expanded");
    }
  });
});


const multipleBoxes = document.querySelectorAll('.multiple');

multipleBoxes.forEach((box) => {
    const boxInfo = box.querySelector('.box__info')

    if (boxInfo){
        boxInfo.addEventListener("click", (event) =>{
        box.classList.toggle('active');
        });


    }
})