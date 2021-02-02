'use strict';
let lang = prompt('RU / EN ? if...else', 'ru');

if(lang === 'en'){
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}else if(lang === 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');
}



let lang2 = prompt('RU / EN ? switch', 'ru');

switch(lang2){
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');
        break;
        case 'en':
            console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
            break;
        }
        

let lang3 = prompt('RU / EN ? array', 'ru');

let langArr = ['ru',['Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресение '],
'en',['Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday ']];
let num = langArr.indexOf(lang3);

console.log(langArr[num + 1].toString());


let namePerson = prompt('Введите имя', 'Nemo');

let result = namePerson === 'Артём' ? console.log('Директор') : 
namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');;
