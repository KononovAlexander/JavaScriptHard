'use strict';

let userStr = prompt('Введите строку!');

let getString = function(string){
while (!isNaN(string)  || string === '' || string === null){
        string = prompt('Введите строку!');
    }
    string = string.trim(); 
     if(string.length > 30){
         string = string.slice(0, 30).trim() + '...';
         return string;
     }else{
         return string;
     }

};

console.log(getString(userStr));

