const counter = document.querySelector(".counter");
const decrease = document.querySelector(".dec__btn")
const reset = document.querySelector(".reset__btn")
const increase = document.querySelector(".inc__btn");
let count = 0;


decrease.addEventListener("click", () =>{
    count--;
    counter.textContent = count;
})


reset.addEventListener("click", () =>{
    count = 0;
    counter.textContent = count;
})


increase.addEventListener("click", () =>{
    count++;
    counter.textContent = count;
})


let symbol = "#";
let number = 0;

while(number < 4){
    console.log(symbol);
    symbol = symbol + "#";
    number = number + 1;
};



for (let i = 0; i <= 8; i++) {
	let str = "* ";
	console.log(str.repeat(i));
}

