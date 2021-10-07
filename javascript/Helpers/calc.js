import { calcScreen } from "./variables.js"
let calcMemory;

export function calculator(pressedBtn){
      
};
            
export function toScreen(value){
    calcScreen.innerHTML=value;
};

export function numberHandler(pressedNumber){
    pressedNumber =='.' ? '.' : pressedNumber = parseInt(pressedNumber);
   console.log(typeof(pressedNumber))
   console.log(pressedNumber)
    if(calcMemory == undefined || calcMemory.length <1){
        pressedNumber == '.' ? calcMemory = '0.' : calcMemory = pressedNumber
    }else{
        calcMemory = calcMemory.toString() + pressedNumber;
    }
    toScreen(calcMemory)
};


export function functionsHandler(pressedFunction){
    console.log(pressedFunction.path[0].innerText)
};

export function operationHandler(pressedSymbol){
    console.log(pressedSymbol)
    // let result;
    // console.log(pressedSymbol)
    // if(pressedSymbol == '+')  result = calcMemory+10;

    // toScreen(result)
}
// export function sum(){
 
// };

// export function substract(){

// };

// export function divide(){

// };

// export function multiply(){

// };

export function equal(){
    console.log('equal function')
};

export function reset(){

};

export function erase(){
    let value = calcScreen.innerHTML;
    let character = value.length
    let x = value.substring(0, character - 1);
    toScreen(x)
};


export function memory(){

};

export function memory1(){

};

export function memory2(){

};

export function change(){

};

export function percent(){
console.log('percent')
};
