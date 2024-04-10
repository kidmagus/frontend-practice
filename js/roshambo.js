const selections = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.querySelector(".moveDisplay__player");
const computerDisplay = document.querySelector(".moveDisplay__computer");
const resultDisplay = document.querySelector(".moveDisplay__result");
const buttons = document.querySelectorAll("button"); 
const playerScoreDisplay = document.querySelector(".scoreDisplay__player")
const computerScoreDisplay= document.querySelector(".scoreDisplay__computer")
const reset =document.querySelector(".reset")


let playerScore = 0;
let computerScore = 0;

//Giving function of Buttons = Player Selections 
buttons.forEach(button => {
    button.addEventListener("click", function() {
        playGame (this.value);
    })
})
//Random Computer = Computer Selections
function computerPlay(){
   return selections[Math.floor(Math.random() * selections.length)];

}


function playGame (playerSelection){
    computerSelection = computerPlay();
    let result = '';


    //Algorithm of Winning and Losing
    if (playerSelection === computerSelection){
        result = "ITS A TIE";
        resultDisplay.classList.remove('redText', 'greenText');

    } else {
        switch(playerSelection){
            case "Rock": 
                result = (computerSelection === "Scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "Scissors" :
                result = (computerSelection === "Paper") ? "YOU WIN" : "YOU LOSE";
                break;
            case "Paper" : 
                result = (computerSelection === "Rock") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    } 

 

    //For Increment = Results;
    switch(result) {
        case "YOU WIN":
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
            resultDisplay.classList.add('greenText');
            resultDisplay.classList.remove('redText');
            break;
        case "YOU LOSE":
            resultDisplay.classList.add('redText');
            resultDisplay.classList.remove('greenText');
            computerScore++;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
            break;
    }

   

    //Displaying the Content
    playerDisplay.textContent = `Player Move: ${playerSelection}`;
    computerDisplay.textContent = `Computer Move: ${computerSelection}`;
    resultDisplay.textContent = `Result: ${result}`;

    
    //For Debugs
  
    
}


reset.addEventListener("click", () => {

    computerScore = 0;
    playerScore = 0;
    resultDisplay.classList.remove('redText', 'greenText');
    
    computerDisplay.textContent = `Computer Move: `;
    playerScoreDisplay.textContent = `Player Score: 0`;
    computerScoreDisplay.textContent = `Computer Score: 0`;
   

 })