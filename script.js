let num =  266219 ;

let numStr = String(num).split('');
let sum = 1;

for( let i = 1; i <= numStr.length; i++){

    sum *= numStr[i - 1];
    
}
console.log('Сумма: ' + sum);
console.log('Первые два числа: ' + String(sum**3).substr(0, 2));


