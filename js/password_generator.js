const result = document.querySelector(".container__result");
const generatePassword = document.querySelector(".container__btn");
const passwordLength = document.querySelector(".container__input");
const addLowercase = document.querySelector(".addLowercase");
const addUppercase = document.querySelector(".addUppercase");
const addNumbers = document.querySelector(".addNumbers");
const addSymbols = document.querySelector(".addSymbols");


generatePassword.addEventListener("click", () => {
    const passwordLengthInput = passwordLength.value;

    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolsChar = "!@#$%^&*()";

    let allowedChars = '';
    let password= '';

    if (addLowercase.checked){
        allowedChars += lowercaseChar;
    } if (addUppercase.checked){
        allowedChars +=  uppercaseChar;
    } if (addNumbers.checked){
        allowedChars +=  numberChar ;
    } if (addSymbols.checked){
        allowedChars += symbolsChar;
    }


    if (passwordLengthInput.length === 0){
        result.innerText = "You must choose how many character you want";
        return;
    } if (allowedChars.length === 0){
        result.innerText = "You must choose one character type";
        return;
    } if (passwordLengthInput < 7){
        result.innerText = "It should be 7 characters";
        return; 
    }

    for(let i = 0; i < passwordLengthInput; i++){
        const index = Math.floor(Math.random () * allowedChars.length);
        password += allowedChars[index];
    }

    result.innerText = password;



})



