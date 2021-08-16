import { calcScreen } from "./variables.js"
let calcMemory;
let operation = null;

export function calculator(pressedBtn){
    let value = pressedBtn.value;
    let screenValue = calcScreen.innerHTML;

    if(typeof(value) == 'number' || value == '.' ){
        if(screenValue==''){
            toScreen(value);
        }else {
            toScreen(screenValue+value);
            operation = null;
        };
    }else{
        switch(value){
            case "onOff":
                reset()
                break;
            case '+':
                sum(screenValue, value)
                break;
            case "C":
                erase()
                break;
            }
        }
                
    };
            
    function toScreen(value){
        calcScreen.innerHTML=value;
    };

    function sum(screen, operation){
    if( calcScreen.innerHTML ==null){
        calcMemory =0;
        console.log(calcMemory)
    }
    if(operation == null){
        toScreen("+")
        operation = "+";
        calcMemory = screen.innerHTML
    }else{
        operation = "+";
    }
};

function substract(){

};

function divide(){

};

function multiply(){

};

function equal(){

};

function reset(){

};

function erase(){
    let value = calcScreen.innerHTML;
    let character = value.length
    let x = value.substring(0, character - 1);
    toScreen(x)
};


function memory(){

};

function memory1(){

};

function memory2(){

};

function change(){

};

function percent(){

};
