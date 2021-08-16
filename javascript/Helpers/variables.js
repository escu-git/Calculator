export const calcArea = document.getElementById('calcArea')
export const calculatorContainer = document.createElement('div');
export const calcScreen = document.createElement('div');
export const buttonsArea = document.createElement('div');
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
    {id:0, name:'zero', value:0}
];
export const symbols = [
    {id:'+', name:'plus',value:"+"}, 
    {id:'-', name:'minus',value:"-"}, 
    {id:'/',name:'divide',value:"/" }, 
    {id:'*', name:'multiply',value:"*"}, 
    /*{id:'(', name:'open',value:"("}, 
    {id:')', name:'close',value:")"},*/
    {id:'=', name:'equal',value:"="}, 
    {id:'.', name:'dot',value:"."}, 
    {id:'%', name:'percent',value:"%"}, 
    {id:'+/-', name:'change',value:"+/-"}
];
export const calcFunctions = [
    {id:'C', name:'C',value:"C"},
    {id:'M',name:'memory',value:"M"},
    {id:'+M', name:'memory1',value:"+M"},
    {id:'-M', name:'memory2',value:"-M"},
    {id:'AC', name:'AC',value:"AC"}
];
