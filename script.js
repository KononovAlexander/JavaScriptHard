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
           		// continue;
           		x++;
                
           	}
           	else if(x !== i && z === 0) {
           		// console.log(i);
           		break;
           		
           }else if(x === i && z ===0){

             console.log(i);
             break;
           }
        
        	
        }while( x <= i);

     // for(let i = 0; i <= 100; i++){


     //   if(Number.isInteger(Math.sqrt(i))){
     //       continue; 
     //   }else if(i % 2 === 0){
     //   	// for(let x = 2; x < i; x++){
     //             continue;
     //   		}else if(i % 3 === 0){

     //             continue;
     //   		}else if(i % 5 === 0){
     //             continue;     
     //   		}else if(i % 7 === 0 ){
     //   			continue
     //   		}else{
     //   			console.log(i);
     //   			continue;
     //   		}
       };

     };


arrSort(arr);