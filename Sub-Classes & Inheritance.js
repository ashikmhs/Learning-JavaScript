//sub class
//Inheritance

class Person {  //base class
    constructor (fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {  //sub class
    constructor (fname,lname,phone,email){
        super(fname,lname);

        this.phone = phone;
        this.email = email;
    }

    fullname() {
        console.log(this.firstName,this.lastName);
    }
}

let person1 = new Person("Ashik", "Mahmud");
console.log(person1);

let customer1 = new Customer("Ashik", "Mahmud", "01982156290","ashikmahmud113@gmail.com");
console.log(customer1);

console.log(customer1.greeting());
console.log(customer1.fullname());