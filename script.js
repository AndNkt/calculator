let comaAlreadyPressed=false;
let operationCode=0;
let lcd=document.getElementById('lcd-row');
	let varTwo=[];
	let varOne=[];

function calcFun(n,arrFirst,arrSec){

	if(typeof n==='number' && operationCode===0){

	varOne.push(n);
	lcd.textContent=varOne.join('');

	}else{

		if(n=="+"){
			operationCode=2;
		}else if(n=="-"){
			operationCode=3;
		}
		else if(typeof n==='number' && operationCode!==0){

		varTwo.push(n);
		lcd.textContent=varTwo.join('');
		}
	else if(n==='equ'){
	// not wrk else if(n==='equ' && arrFirst.length!==0 && arrSec.length!==0){	

			if(operationCode===2){
				
			//console.log(typeof varTwo);
			varOne=varOne.join('');
			varTwo=varTwo.join('');
			varOne=parseInt(varOne);
			varTwo=parseInt(varTwo);
			varOne=varOne+varTwo;
			lcd.textContent=varOne;
			//console.log(typeof varTwo);\
			}

			else if(operationCode===3){

				varOne=varOne.join('');
				varTwo=varTwo.join('');
				varOne=parseInt(varOne);
				varTwo=parseInt(varTwo);
				varOne=varOne-varTwo;
				lcd.textContent=varOne;
			}
		}
	}

	
	console.log(varOne);
	console.log(varTwo);
	//console.log(typeof varOne +' varone',typeof n+' n');
	//varOne=parseFloat(varOne.join(''));

	
}

function returnValues(obj) {
    return Object.keys(obj).map(function(key) {
       return obj[key];
    });
}