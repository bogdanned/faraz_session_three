const propertyName = "city";

let person = {
  height: 175,
  name: "John",
  favcolours: ["Red", "Blue", "Black"],
  [propertyName]: {
    short: "ES",
    long: "Spain"
  },
  printColours: function () {
    this.favcolours.forEach(function (color) {
      console.log(color);
    });

    // console.log(this.favcolours);
  },
  greeting: function () {
    alert(`Hello my name is ${this.name}`);
  }
};

// person.name --- person["name"]

for (let property in person) {
  // console.log(property + ": " + person[property]);
}

function Person(name, lastName, age, email) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  //  vaild email: ends in .com
  if (email && email.endsWith(".com")) {
    this.email = email;
  } else {
    if (email) {
      console.error(email + " is not valid.");
    }
    this.email = "NOT_VALID";
  }
  this.greeting = function () {
    console.log(`Hello my name is ${this.name} & I am ${this.age} years old!`);
  };
}

const firstPerson = new Person("Faraz", "Hafez", 24, "faraz.hafiz@gmail.com");
const secondPerson = new Person("Bogdan", "Nedelcu", 24, "hello@bogdanned.net");
const thirdPerson = new Person("Jack", "Rusell", 27);

// console.log(firstPerson);
// console.log(secondPerson);
// console.log(thirdPerson);
const personList = [firstPerson, secondPerson, thirdPerson]

personList.map(function(per){
per.greeting()
})

// firstPerson.greeting()
// secondPerson.greeting()
// person.printColours();

//console.log(person);
//console.log(person.name);
// person.greeting()

// const now = new Date().getMonth():

// Objects

//const someObject = {};

// console.log(someObject, "someObject");
