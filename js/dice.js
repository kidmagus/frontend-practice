const dice = document.querySelector(".dice__txtbox");
const rollDice = document.querySelector(".dice__btn");
const result = document.querySelector(".dice__result");
const diceImg = document.querySelector(".dice__images")
const values = [];
const img = [];

rollDice.addEventListener("click", () => {

    numDice = dice.value;

    for (let i = 0; i < numDice; i++){
        const value = Math.floor(Math.random()* 6) + 1;
        values.push(value)
        img.push(`<img src="img/${value}.png">`)
    }

    result.textContent = `dice: ${values.join(', ')}`
    diceImg.innerHTML = img.join('');
})

console.log(img)




const oneDice = document.querySelector(".oneDice__btn")
const oneDiceResult = document.querySelector(".onedice__result")
const oneDiceImg = document.querySelector(".onedice__images");

oneDice.addEventListener("click", () => {
    const randomDice = Math.floor(Math.random()*6)+1;
    oneDiceResult.textContent = `${randomDice}`
    oneDiceImg.innerHTML = `<img src="img/${randomDice}.png">`;
    
})
