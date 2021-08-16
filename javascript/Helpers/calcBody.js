import { calcArea, calculatorContainer, calcScreen, buttonsArea, onOffBtn, numbers, symbols, calcFunctions, values } from "./variables.js";
import { listener } from "./listeners.js";

export function createCalc(){
    calculatorContainer.className='calculatorContainer';
    buttonsArea.className='buttonsArea';
    calcScreen.className='calcScreen';
    onOffBtn.className='onOffBtn';
    onOffBtn.style.gridArea='onOffBtn';
    let i;
    for(i=0; i<numbers.length; i++){
        const numberButton = document.createElement('div');
        numberButton.innerHTML=numbers[i].id;
        numberButton.setAttribute("id", numbers[i].name);
        numberButton.classList.add('numberButton');
        numberButton.classList.add('calcButton');
        numberButton.style.gridArea=`${numbers[i].name}`;
        buttonsArea.append(numberButton);
    };
    for(i=0; i < symbols.length; i++){
        const symbolButton = document.createElement('div')
        symbolButton.innerHTML = symbols[i].id;
        symbolButton.setAttribute("id", symbols[i].name);
        symbolButton.style.gridArea=`${symbols[i].name}`
        symbolButton.classList.add('symbolButton');
        symbolButton.classList.add('calcButton')
        buttonsArea.append(symbolButton);
    };
    for(i=0;i<calcFunctions.length;i++){
        const functionButton = document.createElement('div');
        functionButton.innerHTML = calcFunctions[i].id;
        functionButton.setAttribute("id", calcFunctions[i].name);
        functionButton.style.gridArea=`${calcFunctions[i].name}`;
        functionButton.classList.add('functionButton');
        functionButton.classList.add('calcButton');
        buttonsArea.append(functionButton)
    };
    calculatorContainer.append(calcScreen, buttonsArea);
    calcArea.append(calculatorContainer);
    [numbers, symbols, calcFunctions].forEach(x=>{
        x.forEach(x=>{
            let btn = document.getElementById(x.name)
            btn.addEventListener('click',event=>{
                listener(event)
            })
        })
    })
    let array = [numbers, symbols, calcFunctions].map(x=>x.forEach(x=>{
        values.push({id:x.id, value:x.value})
    }
        ))
}

