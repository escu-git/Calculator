import { calculator } from "./calc.js";
import { toScreen } from "./calc.js";
import {values} from './variables.js'



export function listener(button){
    let object = values.filter(obj=> button.path[0].innerText == obj.value)
    calculator(object[0]);
};

