import {Color} from "./color";
let randomRed = Math.ceil(Math.random() * 255);
let randomGreen = Math.ceil(Math.random() * 255);
let randomBlue = Math.ceil(Math.random() * 255);
let color = new Color(randomRed, randomGreen, randomBlue);
document.body.style.color = color.hex;
document.body.style.backgroundColor = color.changeHue(Math.random() < 0.5 ? 100 : -100);
