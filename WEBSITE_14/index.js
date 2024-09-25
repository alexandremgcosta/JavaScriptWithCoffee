/*

    Object = A collection of related properties and/or methods.
             Can represent real world objects (people, products, places)
             object = {key: value, function()}
            
*/

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: function(){console.log("I am eating a Krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey! I am Patrick...."),
    eat: () => console.log("I am eating roast beef, chicken and pizza"),
}


console.log(person1);
person1.sayHello();
person1.eat();
console.log(person2);
person2.sayHello();
person2.eat();

/*

        this =      reference to the object where THIS is used.
                    (the object depends on the immediate context)
                    person.name = this.name

*/

const person3 = {
    firstName: "David",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.firstName}`)},
}

person3.sayHello();

/*

    Constructor =       Special method for defining the properties
                        and methods of objects.

*/

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Ford", "Mustang", 2022, "Blue");
const car3 = new Car("Ford", "Mustang", 2011, "Silver");

console.log(car1);
console.log(car2);
console.log(car3);