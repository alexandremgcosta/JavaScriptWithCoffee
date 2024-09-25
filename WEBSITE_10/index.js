/*
        Array = A variable like structure that can hold more than 1 value

*/

let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut";

console.log(fruits);

let numOfFruits = fruits.length;

console.log(numOfFruits);

fruits.sort();
console.log(fruits);

fruits.sort().reverse();
console.log(fruits);


/*  ***********************

    Spread operator = ...   allows an iterable such as an
                            array or string to be expanded
                            into seperate elements ( unpacks the elements)

*/

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

/*  
    Rest parameters = (...rest)     allow a function work with a varaible number of 
                                    arguments by bundling them into an array
*/

function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);
