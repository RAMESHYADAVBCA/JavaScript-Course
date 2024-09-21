"use strict";

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
