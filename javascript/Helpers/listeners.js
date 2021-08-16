import { screen } from "./calc.js";
import {values} from './variables.js'


export function listener(button){
    console.log(values)
    let object = values.filter(obj=> button.path[0].innerText == obj.value)
    screen(object[0]);
}