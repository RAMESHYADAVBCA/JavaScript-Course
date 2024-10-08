"use strict";
/*

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = ` ${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1998) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Ram';

      //Reassingning outer scope's variaable
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);
      const output = 'New OUTPUT!';
       
      
    }
    console.log(millenial);
    console.log(output);
    
    
   
  }
  printAge();

  return age;
}

const firstName = "Ramesh";
calcAge(1991);

// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExper(2, 3));
console.log();
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExper = function(a, b){
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if(!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart(){
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// The this Keyword in Practice

// console.log(this);
const calcAge = function(birthYear){
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

 const calcAgeArrow = birthYear =>{
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function(){
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); 


// Regular Functions vs Arrow Functions

var firstName = "Matilda";

const ramesh = {
  firstName: "Ramesh",
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //solution 2;
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
ramesh.greet();
ramesh.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

// PRIMITIV VS. OBJECTS (PRIMITIVE VS. REFERENCE TYPES)

let age = 30;
let oldage = 31;
console.log(age);
console.log(oldage);

const me = {
  name: "Ramesh",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me", me);

// REVIEV: PRIMITIVES, OBJECTS AND JAVASCRIPT ENGINE

/*       PRIMITIVES                       OBJECTS

         
         1 Number                         Object literal         
         2 String                          Arrays
         3 Boolean                         Functions
         4 Underdefiend                    Many more 
         5 Null                               
         6 Symbol
         7 Biglnt

// PRIMITIVES values EXAMPLE

let age1 = 30;
let oldage1 = age1;
age1 = 31;
console.log(age); //31
console.log(oldage1); // 30

//Reference values example;

const m = {
  name: "Ram",
  age: 30,
};
const friends = m;
friends.age = 27;

console.log("Friend:", friends);
// { name: 'Jonas', age: 27}

console.log('M:', m);
// {name: 'Ram', age: 27}
*/

// PRIMITIVES VS. OBJECTS IN PRACTICE

// Primitive types
let lastName = "Willians";
let oldLastName = lastName;
lastName = "Drives";
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Willians",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// marriedJessica = {};

//copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Willians",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Drives";
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
