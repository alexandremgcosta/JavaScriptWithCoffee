/*
        Function = A section of reusable code.
                   Declare code once, use it whenever you want.
                   Call the function to execute that code.
*/

function happyBirthday(username, age){  //Parametros
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
}

happyBirthday("Alex", 28); //Argumentos
//happyBirthday("Spongebob", 30); //Argumentos
//happyBirthday("Patrick", 37); //Argumentos

function add(x,y){
    let result = x+y;
    return result;
}

let answer = add(8,3);
console.log(answer);

console.log(add(8,3));


/*

        Variable scope = where a variable is recognized
                         and accessible (local vs global)

*/

let x= 3;

function function1(){
    let x= 1;                   // USA PRIMEIRO A VARIAVEL LOCAL 
    console.log(x);
}

function function2(){
    console.log(x);
}

function1();
function2();