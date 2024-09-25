/*
    string methods = allow you to manipulate and work with text (strings)

*/

let userName = "Alex";

console.log(userName.charAt(2));

console.log(userName.indexOf("l"));

console.log(userName.length);



let myName = "  A lex";

myName = myName.trim();
console.log(myName);

console.log(myName.toLowerCase());

console.log(myName.toUpperCase());

console.log(myName.repeat(3));

let result = myName.includes(" ");

if(result){
    console.log("Your name can't include ' '.");
} else{
    console.log(myName);
}


/*

    String slicing = creating a substring
                     from a portion of another string

                     string.slice(start, end)

*/

const fullName = "Alexandre Costa";
let firstName = fullName.slice(0,9);
let lastName = fullName.slice(10,15);
console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);
console.log(firstChar);
console.log(lastChar);


/*
    Method Chaining = Calling one method after another
                      in one continuous line of code.
*/

// NO METHOD CHAINING

let username = window.prompt("Enter your username: ");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);

// METHOD CHAINING

let myusername = window.prompt("Enter your username: ");

myusername = myusername.trim().charAt(0).toUpperCase() +
                myusername.trim().slice(1).toLowerCase();

console.log(myusername);