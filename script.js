'use strict';
let generateOddNumber = function(num1, num2){
    
    let random ;

    if(Math.sign(Math.min(num1, num2)) === -1){

        random = Math.round((Math.random() * (Math.max(num1, num2) - Math.min(num1, num2)) + Math.min(num1, num2)));

    }

    else if(Math.sign(Math.min(num1, num2)) === 1){
 
        random = Math.round(Math.random() * ((Math.max(num1, num2)) - Math.min(num1, num2)) + Math.min(num1, num2));
        
    }

     random = random % 2 === 0 ? random - 1 : random;

        return random;

        };

console.log('generateOddNumber: ', generateOddNumber(-100, 100));




