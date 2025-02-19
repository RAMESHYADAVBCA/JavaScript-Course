"use strict";
/*

///////////////////////////////////////////////
//Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never to this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const ramesh = new Person("Ramesh", 2003);
console.log(ramesh);

//1. New {} is created
//2. function is called, this ={}
//3. {} linked to prototype
//4. function automatically return{}

const avi = new Person("Avi", 2015);
const ramakant = new Person("Ramakant", 2005);
console.log(avi, ramakant);

const jay = "Jay";

console.log(ramesh instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

ramesh.calcAge();
avi.calcAge();

console.log(ramesh.__proto__);
console.log(ramesh.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ramesh));
console.log(Person.prototype.isPrototypeOf(avi));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(ramesh.species, avi.species);

console.log(ramesh.hasOwnProperty("firstName"));
console.log(ramesh.hasOwnProperty("species"));

console.log(ramesh.__proto__);
// Object.prototype(top of protype chain)
console.log(ramesh.__proto__.__proto__);
console.log(ramesh.__proto__.__proto__.proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2:'Mercedes' going at 95 km/h


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car("BMW", 120);
const Mercedes = new Car("Merceds", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

// class expression
// const PersonsC1 = class{}

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. classes are NOT hoisted
// 2. Classses are first-class citizes
// 3. classes are executed in strict mode
