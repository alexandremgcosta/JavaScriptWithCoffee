/*
    Math = built-in object that provides a
    collection of properties and methods
    
*/

console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let y = 3.99;
let c = 4;
let z;

z = Math.round(x);
console.log(z);

z = Math.floor(y);
console.log(z);

z = Math.pow(x,y);
console.log(z);

/*
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);

*/

//RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}