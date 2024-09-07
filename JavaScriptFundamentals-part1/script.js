/*
// Values and Variables

let fullname = "Ramesh";
console.log(fullname);
console.log(fullname);
console.log(fullname);
console.log(21);

console.log("shyam");


// Data Types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
//console.log(typeof true);
console.log(typeof javaScriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Ramesh');

javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year =1991;
console.log(typeof year);

console.log(typeof null);


// let, const and var

let age = 30;
    age = 31;
    console.log(age);

    {
        let age = 30;
        console.log(age);
    }

    const birthyear = 2003;
    console.log(birthyear);
    
    {
        const birthyear = 2005;
        console.log(birthyear);
    }

    {
        const birthyear = 2005;
        console.log(birthyear);
    }

    var job = 'programer';
     job = 'Teacher';
     console.log(job);

     lastname = 'Ramesh';
     console.log(lastname);

     

     //Basic Operators
 const now = 2003;
const ageRamesh = now - 1990;
const ageRam = now - 1995;
console.log(ageRamesh, ageRam);

console.log(ageRamesh *2, ageRamesh / 2, 2**3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const FirstName = 'Ram';
const LastName = 'Rama';
console.log(FirstName + LastName);
console.log(FirstName + ' ' + LastName);

// Assignment Operator
 
let x = 10 + 5; //15
x += 10;// x = x + 10 =25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1 
x--; 
console.log(x);

// comparison operators

console.log(ageRamesh > ageRam);
console.log(ageRam >= 13);
const isFullAge = ageRam >= 13;

console.log(now - 1990 > now - 1995);

console.log(now - 2016 > now - 2024);


// operator Precedence

const now = 2037;
const agejonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x =10
console.log(x, y);

const averageAge = (agejonas + ageSarah)/2;
console.log(agejonas, ageSarah, averageAge);


//CHALLENGE #1

//const massMark = 78;
//const hightMark = 1.69;
//const massjonas = 92;
//const hightjonas = 1.76;

const massMark = 95;
const hightMark = 1.88;
const massjonas = 85;
const hightjonas = 1.76;

const BMIMark = massMark / hightMark **2;
const BMIjonas = massjonas / (hightjonas * hightjonas);
const markHigherBMI = BMIMark > BMIjonas;
console.log(BMIMark, BMIjonas, markHigherBMI);

// string and Template Literals

const firstName = 'jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' +(year-birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('string with \n\ multiple \n\ lines');

console.log(`string
    multiple
    lines`);
    
   // Taking Decisions: if / else statements

   const age = 15;
 
   if(age >= 18){
     console.log('Ramesh can start driving license 🚗');
   }else{
    const yearsLeft = 18 -age;
    console.log(`jonas is too young. Wait another ${yearsLeft} years :`);
   }

   const birthYear = 2012;
   let century;
   if(birthYear <= 2000){
    century = 20;
   } else{
    century = 21;
    }
    console.log(century);
    

    // CHALLENGE # 2: Video Solution

    const massMark = 78;
    const hightMark = 1.69;
    const massRamesh = 92;
    const hightRamesh = 1.95;
    
    // const massMark = 95;
    // const hightMark = 1.88;
    // const massRamesh = 85;
    // const hightRamesh = 1.76;
    
    const BMIMark = massMark / hightMark ** 2;
    const BMIRamesh = massRamesh / (hightRamesh * hightRamesh);

    console.log(BMIMark, BMIRamesh);

    // if(BMIMark > BMIRamesh){
    //     console.log("Mark's BMI is higher than Ramesh's !");
    // }else{
    //     console.log("Ramesh's BMI is higher tham Marks's !");
    // }

    if(BMIMark > BMIRamesh){
        console.log(`Mark's BMI (${BMIMark}) is higher than Ramesh's(${BMIRamesh})!`);
    }else{
        console.log(`Ramesh's BMI(${BMIRamesh}) is higher tham Marks's(${BMIMark}) !`);
    }
        
       // TYPE  CONVERSION AND COERCION

// type conversion

const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Ramesh'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + 'year old');
console.log('23' - '10' - '3');
console.log('23' / '2');

let n = '1' + 1; //11
n = n - 1;
console.log(n);


// Truthy and Falsy Values

// 5 falsy values: 0, ' ', undefined, null ,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ramesh'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
    console.log("Don't spend it all !");
} else{
    console.log('You should get a job !');
}

let height = 0;
if(height){
        console.log('YAY! Height is defined');
} else{
    console.log('Height is UNDEFINED');
}

    

   //EQUALITY OPERATORS: == VS. ===

   const age = '18';
   if(age === 18) console.log('You just became an adult :D (strict)');

   if(age == 18) console.log('You just became an adult :D (loose)');

 const favourite = Number(prompt("what's your favourite number?"));
 console.log(favourite);
 console.log(typeof favourite);

 if(favourite === 23){ // 22 ===  -> FALSE
    console.log('cool! 23 is an amzaing number!');
 } else if(favourite ===7){
    console.log('7 is also a cool number');
 } else if(favourite ===9){
    console.log('9 is also a cool number')
 }
 else{
    console.log('Number is not 23 or 7 or 9');
 }

 if(favourite !== 23) console.log('why not 23?');

 

 // BOOLEAN LOGIC

 // LOGICAL OPERATORS

 const hasDriverslicense = true; // A
 const hasGoodVision = true; // B

 console.log(hasDriverslicense && hasGoodVision);
 console.log(hasDriverslicense || hasGoodVision);
 console.log(!hasDriverslicense);

//  if(hasDriverslicense && hasGoodVision){
//     console.log('Ramesh is able to drive');
//  } else{
//     console.log('Someone else should drive....');
//  }

 const IsTired = false; // c
 console.log(hasDriverslicense && hasGoodVision && IsTired);

 if(hasDriverslicense && hasGoodVision && !IsTired){    
    console.log('Ramesh is able to drive');
 } else{
    console.log('Someone else should drive....');
 }
    
 
   // CHALLENGE #3

   // Video Solution

//    const scoreDolphins = (96 + 108 + 89)/ 3;
//    const scoreKoalas = (88 + 91 + 110)/ 3;
//    console.log(scoreDolphins, scoreKoalas);

//    if(scoreDolphins > scoreKoalas){
//     console.log('Dolphins win the trophy🏆');
//    } else if(scoreKoalas > scoreDolphins){
//     console.log('Koalas win the trophy🏆');
//    } else if(scoreDolphins === scoreKoalas){
//     console.log('Both win the trophy!');
//    }

   //BONUS 1
    
   const scoreDolphins = (97 + 112 + 80)/ 3;
   const scoreKoalas = (109 + 95 + 50)/ 3;
   console.log(scoreDolphins, scoreKoalas);

   if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win the trophy🏆');
   } else if(scoreKoalas > scoreDolphins && scoreKoalas){
    console.log('Koalas win the trophy🏆');
   } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log('Both win the trophy!');
   } else{
    console.log('No one win trophy 😭')
   }
    
   
// Switch Statement

const day = 'friday';

switch(day){
    case 'monday':// day ==='monday'
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
        case 'tuesday':
            console.log('prepare theory videos');
            break;
            case 'wednesday':
                case 'thursday':
                console.log('write code example');
                break;
                case 'friday':
                    console.log('Record video');
                    break;
                    case 'saturday':
                        case 'sunday':
                            console.log('Enjoy the weekend :D');
                            break;
                            default:
                                console.log('Not a valid day!');
}



if(day === 'monday'){
    console.log('plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'tuesday'){
    console.log('prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday'){
  
    console.log('write code example');

} else if(day === 'friday'){
    console.log('Record video');

} else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D');
} else{
    console.log('Not a valid day!');
}
    

//Statements and Expression

3 + 4
1991
true && false && !false
if(23 > 10){
    const str = '23 is bigger';
}

const me = 'jonas';
console.log(`I'm ${2037 - 1991} year old ${me}`);



// THE CONDITIONAL(TERNARY) OPERATOR

const age = 23;
//age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water💧');

const drink = age >= 18 ? 'wine🍷': 'water💧';
console.log(drink);


let drink2;
if(age >= 18){
    drink2 = 'wine 🍷';
} else{
    drink2 = 'water💧';
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`);


//CHALLENGE #4
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/