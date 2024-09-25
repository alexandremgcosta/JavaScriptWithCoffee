/*
    Logical operators = used to combine or manipulate boolean values
                        (true or false)

                        AND = &&
                        OR = ||
                        NOT = !
*/

const temp = 250;

if(temp <= 0 || temp > 30){
    console.log("The weather is BAD.");
} else{
    console.log("The wather is GOOD.");
}

const isSunny = true;

if(!isSunny){
    console.log("It is Sunny!");
} else{
    console.log("It is CLOUDY!");
}

/*

    =       assignment operator
    ==      comparison operator (compare if values are equal)
    ===     strict equality operator (compare of values and datatype are equal)
    !=      inequality operator
    !==     strict inequality opertor

*/

const PI = 3.14;

if(PI !== "3.14"){
    console.log("That is NOT Pi");
} else{
    console.log("That is Pi");
}


/*

    While loop = repeat some code WHILE some condition is true

*/

/*
let loggedIn = false;
let username;
let password;

while(!loggedIn){

    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");

    if(username === "Alex" && password === "mypw"){
        loggedIn = true;
        console.log("You are logged in!");
    } else{
        console.log("Invalid credentials! Please try again");
    }

}

*/

/*
    For loop = repeat some code a LIMITED amount of times
*/

for(let i = 0; i <= 2; i++){
    console.log(i);
}