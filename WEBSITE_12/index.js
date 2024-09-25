/*

    .filter() =     creates a new array by filtering out elements

*/

let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);

console.log(evenNums);

function isEven(element){
    return element%2 === 0;
}


/*

    .reduce() = reduce the elements of an array to a single value

*/

const prices = [5,23,31,23,9];

const total = prices.reduce(sum);

console.log(`${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}