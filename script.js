'use strict';
let arr = ['2456', '13', '91', '51', '914', '40', '50001'];


const arrSort = function(array){
   
    for(let i = 0; i < array.length; i++ ){

        let subArr = array[i].split('');

        if(subArr[0] === '2' || subArr[0] === '4'){
            console.log(subArr.join(''));
        }

    }

        for(let i = 2; i <= 100; i++){
        	let x = 2;
           do{
             let z = i % x
            
           	if(z !== 0 ){
           	
           		x++;
                
           	}
           	else if(x !== i && z === 0) {
           		// console.log(i);
           		break;
           		
           }else if(x === i && z ===0){

             console.log(i + '- Делители этого числа: 1 и ' + i);
             break;
           }
        
        	
        }while( x <= i);

       };

     };


arrSort(arr);