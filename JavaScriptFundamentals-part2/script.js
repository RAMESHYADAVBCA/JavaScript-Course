/*
// Activating strict Mode

'use strict';


let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;


//Function

function logger(){
    console.log('My name is Ramesh Yadav');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apple, orange){
    console.log(apple, orange);
    const juice = `Juice with ${apple} apple and ${orange} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



// Function Declaration va Expressions

// Function Declaration

function calcAge1(birthYear){
    return 2037 - birthYear;
}

 const age1 = calcAge1(1991);
 //console.log(age1);

 // Function expression
 const calcAge2 = function(birthYear){
return 2037 - birthYear;
 };
  const age2 = calcAge2(1991);

  console.log(age1, age2);
  
  
 // Arrow Function
  //syntax

const gfg = ()=> {
    console.log();
}

//Arrow Function Without Parameters

const gfg1 = () => {
console.log("Hi Ramesh from GeekforGeeks!!");
}

gfg1();

// Arrow function with Single Parameters
const gfg2 = (x) => x * x;
console.log(gfg2(4));

//Multiple Parameter

const gfg3 = (x, y, z) => {
    console.log(x + y + z);
}

gfg3(10, 20, 30);

//Arrow Function With Default  parameters

const gfg4 = (x, y, z = 30) => {
console.log(x + " " + y + " " + z);
}

gfg4(10, 20)


// Arrow Function
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

 const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1991));

const yearsUnitiRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
   // return retirement;
   return `${firstName} retirement in ${retirement} year`;
}

console.log(yearsUnitiRetirement(1991, 'ram'));
console.log(yearsUnitiRetirement(1981, 'rama'));


// Function calling other Function

function cutFruitPieces(fruit){
    return fruit * 4;

}

function fruitProcessor(apple, orange){

   //calling the cutFruitProcessor function 
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);
    const juice =`juice with ${applePieces} pieces of apple and ${orangePieces} pieces orange`;
    return juice;
}

const fruit = fruitProcessor(5, 9);
console.log(fruit);


// Reviewing Functions

const  calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUnitiRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;


    if(retirement > 0){    
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
//    return `${firstName} retirement in ${retirement} year`;
}

console.log(yearsUnitiRetirement(1991, 'Ramesh'));
console.log(yearsUnitiRetirement(1995, 'ram'));


// CHALLENGE Viedo Solution

// average three number
const average = (a, b, c) => (a + b + c)/3;

console.log((10, 5, 3));

// score

let avgDolphins = average(44, 23, 71);
let avgKolas = average(65, 54, 49);
console.log(avgDolphins,avgKolas);

const checkWinner = function(avgDolphins, avgKolas) {

    if(avgDolphins >= 2 * avgKolas){
        console.log(`Dolphins win 🏆(${avgDolphins} vs. ${avgKolas} )`);
    } else if(avgKolas >= 2*avgDolphins){
        console.log(`Kolas win 🏆(${avgKolas} vs. ${avgDolphins})`);
    } else{
        console.log('No team wins...')
    }

}
checkWinner(avgDolphins, avgKolas);
checkWinner(12, 30)

// Test 2

const  Dolphins = average (44, 23, 71);
const  Kolas = average(65, 54, 49);
console.log(Dolphins,Kolas);
checkWinner(Dolphins, Kolas);


// Introduction to Array
const friends1 = 'Ram';
const friends2 = 'Ramesh';
const friends3 = 'Suresh';

const friends = ['Ram','Ramesh','Suresh'];
console.log(friends);

const years = new Array(1991, 1995, 2008, 2024);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

// change name to replace
friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice']
const firstName = 'jonas';
const jonas= [firstName,'Ramakant',2003-2024,'engineer','friends'];
console.log(jonas);
console.log(jonas.length);

// Exercise

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const year = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(year));
const age1 = calcAge(year[0]);
const age2 = calcAge(year[2]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

//create
const ages =[calcAge(year[0]),calcAge(year[2]),calcAge(year[year.length - 1])];
console.log(ages);


// BASIC ARRAY OPERATION (METHODS)
const friends = ['Ram', 'Ramesh', 'Suresh'];
// push method
//friends.push('Jay');
const newlength = friends.push('Jay'); 
console.log(friends);
console.log(newlength);

//unshift method
friends.unshift('John');
console.log(friends);

// Remove element

friends.pop();//last
const popped = friends.pop();
console.log(popped);
console.log(friends);


// shift
friends.shift();// first
console.log(friends);

console.log(friends.indexOf('Ramesh'));
console.log(friends.indexOf('Bob'));

//include
friends.push(23);
console.log(friends.includes('Ramesh'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Ramesh')){
    console.log('You have a friend called Ramesh');
}
    
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1],bills[2] +tips[2]];
console.log(bills, tips, totals); 


// Introduction to object

const jonasArray = [
  "jonas",
  "Ramakat",
  2037 - 1991,
  "teacher",
  ["john", "Suresh", rahul],
];

const jonas1 = {
  firstname: "Ramessh",
  lastname: "Yadav",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["ram", "rahu", mohit],
};

//Dot vs Bracket Notation
const jonas = {
  firstName: "Ramessh",
  lastName: "Yadav",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["ram", "rahu", "mohit"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const namekey = "Name";
console.log(jonas["first" + namekey]);
console.log(jonas["last" + namekey]);

const interestedIn = prompt(
  "what do you want to know about Jonas? choose between firstName,lastname,age,job,and friends"
);
console.log(jonas[interestedIn]);
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request! choose between firstName, lastName.age.job,and friends"
  );
}

jonas.location = "portugal";
jonas[twitter] = "@Rameshyadav";
console.log(jonas);

//Challenge
//"Jonas has 3 friends,and his best friend is called michael"
console.log(
  `$(jonas.firstName)has $ {jonas.friends.length}friends, and his best friend is called $ {jonas.friends[0]}`
);

// objecd Methos

const Ramesh = {
  firstName: "Ramesh",
  lastName: "Yadav",
  birthyear: 1991,
  job: "teacher",
  friends: ["Ram", "roshan", "vinay"],
  hasDriverslience: true,

  // calcAge: function(birthyear){
  //     return 2037 - birthyear;
  // }

  // calcAge: function(){
  //     console.log(this);
  //          return 2037 -  this.birthyear;
  //}
  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${
      Ramesh.job
    }, and he has ${this.hasDriverslience ? "a" : "no"} driver's license.`;
  },
};
console.log(Ramesh.calcAge());

console.log(Ramesh.calcAge());
console.log(Ramesh.calcAge());
console.log(Ramesh.calcAge());

//console.log(Ramesh['calcAge'](1991))

//Challenge
// "Ramesh is a 46-year old teacher, and he has a driver's license"
console.log(Ramesh.getSummary());

// video solution

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "john smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

//"Johan smith's BMI(28.3) is higher than Mark Miller's(23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName} 's BMI(${mark.bmi})is higher than ${john.fullName}'s BMI(${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName} 's BMI(${john.bmi})is higher than ${mark.fullName}'s BMI(${mark.bmi})`
  );
}
  
  
 // ITERATION: THE FOR LOOP
//  console.log('Lifting weights repetition 1 🏋️');
//  console.log('Lifting weights repetition 2 🏋️');
//  console.log('Lifting weights repetition 1 🏋️');
//  console.log('Lifting weights repetition 4 🏋️');
//  console.log('Lifting weights repetition 5 🏋️');
//  console.log('Lifting weights repetition 6 🏋️');
//  console.log('Lifting weights repetition 7 🏋️');
//  console.log('Lifting weights repetition 8 🏋️');
//  console.log('Lifting weights repetition 9 🏋️');
//  console.log('Lifting weights repetition 10 🏋️');

 // for loop keeps runing while condition is TRUE
 for(let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weights repetition ${rep}🏋️`);
 }
  

// LOOPING ARRAY, BREAKING AND CONTINUING
const jonas = [
  "Jonas",
  "Ramakant",
  2037 - 1991,
  "teacher",
  ["Ramesh", "Ramakant", "Suresh"],
  true,
];
const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[4]);
// console.log(jonas[5]);

for(let i = 0; i< jonas.length; i++){
  //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('---ONLY STRINGS---')
for(let i = 0; i<= jonas.length; i++){
  if(typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBER---')
for(let i = 0; i<= jonas.length; i++){
  if(typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}
  

//Looping Backwards and Looping

const jonas = [
  'Jonas',
  'ramakant',
  2037 - 1991,
  'teacher',
  ['Ram', 'peter', 'Alok'],
  true
];

// 0, 1, .... 4
// 4, 3, ....0

for(let i = jonas.length-1; i >= 0; i--){
  console.log(i, jonas[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
  console.log(`------starting erercise ${exercise}`);

  for(let rep = 1; rep < 6; rep++){
    console.log(`Exercise ${exercise}Lifting weight repetition ${rep} 🏋️`);
  }
}
  

// The While Loop

// for(let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weights repetition ${rep}🏋️`);
//  }

let rep = 1;
 while(rep <= 10){
  // console.log(`WHILE Lifting weights repetition ${rep} 🏋️`);
  rep++;
 }

 let dice = Math.trunc(Math.random() *6) + 1;
 

 while(dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() *6) + 1;
  if(dice === 6) console.log('Loop is about to end...');
 }
  */
