/*

    Class =        Provides a more structured and cleaner way to work with objects
                   compared to traditional constructor functions.

*/

class Product{

    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}

const product1 = new Product("Shirt", 19.99);

product1.displayProduct();


/*

        static = keyword that defines properties or methods that belong to a class itself
                 rather the objects created from that class.
                 (class owns anything static, not the objects)

*/

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));


/*

    Inheritance =       Allows a new class to inherit properties and methods from an
                        existing class (parent -> child)
                        helps with code reusability


    Super =             Keyword is used in classes to call the constructor or access the 
                        properties and methods of a parent (superclass)
                        
                        this = this object
                        super = the parent

*/

class Animal{
    alive = true;

    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    constructor(name){
        super(name);
    }

    run(){
        console.log(`This ${this.name} is running!`);
    }
}

class Fish extends Animal{
    constructor(name){
        super(name);
    }
}

class Hawk extends Animal{

    constructor(name){
        super(name);
    }
}

const rabbit = new Rabbit("rabbit");
const fish = new Fish("fish");
const hawk = new Hawk("hawk");

console.log(rabbit.alive);
console.log(rabbit.name);
rabbit.eat();

console.log(fish.alive);

hawk.sleep();

rabbit.run();
// Não seria possivel fazer fish.run();
// O metodo pertence apenas ao rabbit!

