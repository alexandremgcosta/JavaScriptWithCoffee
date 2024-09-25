
/*

    Callback = a function that is passed as an argument to another function.

               used to handle asynchronous operations:
               1. Reading a file
               2. Network requests
               3. Interacting with databases

               "Hey, when you'are done, call this next."
*/

/*
hello();
goodbye();

function hello(){                   // Está a fazer com que demore 3segundos a executar 
    setTimeout(function() {         // a função hello()
        console.log("Hello!");      // Pelo que primeiro está a executar a função goodbye()
    }, 3000);                       // Mesmo sendo chamada depois da função hello()
}

function goodbye(){
    console.log("Goodbye!");
}
*/

// COM O CALLBACK
console.log("----------- COM CALLBACK ---------")

hello(wait);

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}


console.log("----------- forEach()---------")
/*

    forEach()   = method used to iterate over the elements of an array and apply 
                  a specified function (callback) to each element

                  array.forEach(callback)
                  element, index, array are provided
*/

let numbers = [1,2,3,4,5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element *2;
}

function display(element){
    console.log(element);
}


console.log("----------- .map() ---------")

/*
        .map()  =   Accepts a callback and applies that function to each element
                    of an array, then return a new array!

*/

const newnumbers = [1, 2, 3, 4, 5];
const squares = newnumbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}