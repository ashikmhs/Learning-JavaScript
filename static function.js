//Static function

class Person {
    constructor(fname,lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    greeting(){  //normal method can be called only through creating object
        console.log(`Hello ${this.firstName} ${this.lastName}!`);
    }

    static test(){  //static function can be called through the class
        console.log("I am Static Function");
    }

}

let person1 = new Person("Ashik", "Mahmud");

console.log(person1.greeting()); // I have to call this greeting throug creating a object name person1
console.log(Person.test());  // for this i dont have to create any object to call test, i just call the class name
