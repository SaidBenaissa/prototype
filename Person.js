// Prototyp für Person

function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    
}

let person1 = new Person("Max", "Mustermann");
let person2 = new Person("Erika", "Mustermann");

// JavaScript is a dynamic language that allows you to add properties to an object at any time.
// You can also delete properties from an object at any time.
// This is possible because JavaScript objects are mutable.

// Adding a property to an object at any time to an object person1

person1.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

console.log(person1.getFullName()); // getFullName() is a method of the object person1

// console.log(person2.getFullName()); // TypeError: getFullName is not a function of person2


