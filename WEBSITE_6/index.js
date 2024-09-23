/*
    .checked = property that determines the checked state
    of an HTML checkbox or radio button element

*/

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    } else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa.`;
    } else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard.`;
    } else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with Paypal.`;
    } else {
        paymentResult.textContent = `You must select a payment type.`;
    }

}

/*

ternary operator = a shortcut to if{} and else{} statements
                   helps to assign a variable based on a condition
                   condition ? codeIfTrue : codeIfFalse;

let age = 21;

age >= 18 ? "You'are an adult." : "You'are a minor.";

*/


/*

SWITCH = can be an efficient replacement to many else if statments

let day = 1;

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case ..
    .
    .
    .
    .
    default:
        console.log("Is not a day.");

}

*/