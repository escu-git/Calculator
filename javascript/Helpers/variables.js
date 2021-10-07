import { operationHandler, equal, percent, change, erase, memory, memory1, memory2, reset } from "./calc.js";
export const calcArea = document.getElementById('calcArea')
export const calculatorContainer = document.createElement('div');
export const calcScreen = document.createElement('div');
export const buttonsArea = document.createElement('div');
export const onOffArea = document.createElement('div');
export const onOffBtn = document.createElement('div');
export const values =[];

export const numbers = [
    {id:1, name:'one', value:1}, 
    {id:2, name:'two', value:2}, 
    {id:3, name:'three', value:3},
    {id:4, name:'four', value:4}, 
    {id:5, name:'five', value:5}, 
    {id:6, name:'six', value:6}, 
    {id:7, name:'seven', value:7}, 
    {id:8, name:'eight', value:8}, 
    {id:9, name:'nine', value:9}, 
    {id:0, name:'zero', value:0},
    {id:'.', name:'dot',value:"."}
];
export const symbols = [
    {id:'+', name:'plus',value:"+", fn:operationHandler}, 
    {id:'-', name:'minus',value:"-", fn:operationHandler}, 
    {id:'/',name:'divide',value:"/",fn:operationHandler}, 
    {id:'*', name:'multiply',value:"*", fn:operationHandler},
    {id:'=', name:'equal',value:"=", fn:equal}, 
    {id:'%', name:'percent',value:"%",fn:percent}, 
    {id:'+/-', name:'change',value:"+/-",fn:change}
];
export const calcFunctions = [
    {id:'C', name:'C',value:"C", fn:erase},
    {id:'M',name:'memory',value:"M", fn:memory},
    {id:'+M', name:'memory1',value:"+M", fn:memory1},
    {id:'-M', name:'memory2',value:"-M", fn:memory2},
    {id:'AC', name:'AC',value:"AC", fn: reset}
];
