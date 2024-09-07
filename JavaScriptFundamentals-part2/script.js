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
    */
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1],bills[2] +tips[2]];
console.log(bills, tips, totals);


