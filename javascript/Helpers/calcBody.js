import { calcArea, calculatorContainer, calcScreen, buttonsArea, onOffArea, numbers, symbols, calcFunctions, onOffBtn } from "./variables.js";
import { numberHandler, operationHandler} from "./calc.js";

export function createCalc(){
    calculatorContainer.className='calculatorContainer';
    buttonsArea.className='buttonsArea';
    calcScreen.className='calcScreen';
    calcScreen.innerHTML=null;
    onOffBtn.className='onOffBtn';
    onOffArea.appendChild(onOffBtn);
    onOffArea.className='onOffArea';
    onOffArea.style.gridArea='onOff';
    let i;

    for(i=0; i<numbers.length; i++){
        const numberButton = document.createElement('div');
        numberButton.innerHTML=numbers[i].id;
        numberButton.setAttribute("id", numbers[i].name);
        numberButton.classList.add('numberButton');
        numberButton.classList.add('calcButton');
        numberButton.style.gridArea=`${numbers[i].name}`;
        numberButton.addEventListener('click',event=>numberHandler(event.path[0].innerText));
        buttonsArea.append(numberButton);
    };

    for(i=0; i < symbols.length; i++){
        const {value, fn} = symbols[i]
        const symbolButton = document.createElement('div')
        symbolButton.innerHTML = symbols[i].id;
        symbolButton.setAttribute("id", symbols[i].name);
        symbolButton.style.gridArea=`${symbols[i].name}`
        symbolButton.classList.add('symbolButton');
        symbolButton.classList.add('calcButton');
        symbolButton.addEventListener('click', event=>fn(value));
        buttonsArea.append(symbolButton);
    };

    for(i=0;i<calcFunctions.length;i++){
        const functionButton = document.createElement('div');
        functionButton.innerHTML = calcFunctions[i].id;
        functionButton.setAttribute("id", calcFunctions[i].name);
        functionButton.style.gridArea=`${calcFunctions[i].name}`;
        functionButton.classList.add('functionButton');
        functionButton.classList.add('calcButton');
        functionButton.addEventListener('click',calcFunctions[i].fn);
        buttonsArea.append(functionButton);
    };
    buttonsArea.appendChild(onOffArea);
    calculatorContainer.append(calcScreen, buttonsArea);
    calcArea.append(calculatorContainer);
   
}

