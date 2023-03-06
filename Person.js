// Prototyp für Person: one use of prototype is to define/share methods for all instances of a class

function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;

    // Define method inside class then it's only available for the instance of the class (Person)
    // this.getFullName = function() {
    //     return this.firstName + " " + this.lastName;
    // }
}

// Define method outside class using prototype then it's available for all instances of the class (Person)
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

let person1 = new Person("Max", "Mustermann");
let person2 = new Person("Erika", "Mustermann");

person1.getFullName(); // Max Mustermann
console.log(person1.getFullName()); // Max Mustermann
person2.getFullName(); // Erika Mustermann
console.log(person2.getFullName()); // Erika Mustermann



