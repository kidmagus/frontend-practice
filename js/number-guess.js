// const min = 1;
// const max = 100;
// const answer = Math.floor(Math.random() * (max - min + 1) + min);


// let guess;
// let game = true;
// let attempt;

// while (game){
//     guess = window.prompt(`Enter a Number between ${min} and ${max}`);
//     guess = Number (guess);

//     if(isNaN(guess) || guess < min || guess > max){
//         window.alert(`Enter a valid number between ${min} and ${max}`);
//     }else {
//         attempt++;
//         if(guess < answer){
//             window.alert("Too Low");
//         } else if (guess > answer){
//             window.alert("Too High");
//         } else {
//             window.alert("You're Right!");
//             game = false;
//         }
//     }
// }




const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1 )+ min);

let game = true;
let guess;
let attempt = 0;

while (game){
    guess = window.prompt(`Enter a number between ${min} and ${max}`);
    guess = Number(guess);

    if (isNaN(guess) || guess < min || guess > max){
        window.alert(`Enter a VALID number between ${min} and ${max}`)
    } else {
        attempt++;
        if (guess < answer){
            window.alert("Too low");
        } else if (guess > answer){
            window.alert("Too High");
        } else {
            window.alert(`You're Right!!  It took you ${attempt} times to guess`);
            game = false;
        }
    }
}
