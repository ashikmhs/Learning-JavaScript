// Object Method
let person = {
    firstname: "Fazle",  //firstname is a property 
    lastname: "Rahat",
    dob: "9-10-1995", //number, string, date, array, object

    fullname: function() { //Method
        return `${this.firstname} ${this.lastname}`;   //fullname is a method
    }

}

console.log(person.firstname);
console.log(person.fullname());

let str = "Bohubrihi";
console.log(str.length);
console.log(str.split());


//lenght is a property of str
//split() is a method od str
//we use () after splite