import { calcScreen } from "./variables.js"

export function screen(pressedBtn){
    if(pressedBtn == 1 || 2 || 3 || 4 ||5 ||6 ||7 ||8 ||9 ||0){
        console.log(pressedBtn)
        calcScreen.innerHTML=pressedBtn;
    }else{return}
};

export function sum(){

};

export function substract(){

};

export function divide(){

};

export function multiply(){

};

export function equal(){

};