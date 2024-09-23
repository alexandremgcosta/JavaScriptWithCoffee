
/*
let username;

username = window.prompt("What's your usarname?");

console.log(username)
*/

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    
    document.getElementById("myH1").textContent = `Hello ${username}`;
}


/*

Type conversion = change the datatype of a value to another.
    (strings, numbers, booleans)

*/

let age = window.prompt("How old are you?");
age = Number(age);
age+=1;
console.log(age);


let x = "";
let y = "";
let z = "";

x = Number(x);
y= String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// const  = A VARIAVLE THAT CAN'T BE CHANGED