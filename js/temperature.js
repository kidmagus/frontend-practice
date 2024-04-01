const degreeNumber = document.querySelector(".number");
const toFahrenheit = document.querySelector(".toFahrenheit");
const toCelsius = document.querySelector(".toCelsius");
const toConvert = document.querySelector(".convert");
const result = document.querySelector(".result");
let temp;

toConvert.addEventListener("click" ,() => {
    temp = Number(degreeNumber.value);
   
    if (temp == ''){
        window.alert("Select a Degree Unit")
    }else if(temp < 0) {
        window.alert("Input a valid number")
    } else if (toFahrenheit.checked){
        temp = temp * 9/ 5 + 32;
        result.textContent = temp.toFixed(1) + 'F';
    }else if (toCelsius.checked) {
        temp =  (temp - 32) * (5 / 9)
        result.textContent = temp.toFixed(1) + 'C';
    } 
})