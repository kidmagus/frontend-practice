const mode = document.querySelector(".mode__btn");
const header = document.querySelector(".mid");
mode.addEventListener("click", () => {
  header.classList.toggle("active");
});

console.log(header);
