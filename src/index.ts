import Color from './color';

import '../scss/start-page.scss';

const randomRed1: number = Math.ceil(Math.random() * 255);
const randomGreen2: number = Math.ceil(Math.random() * 255);
const randomBlue3: number = Math.ceil(Math.random() * 255);
let fontColor: Color = new Color(randomRed1, randomGreen2, randomBlue3);
let backgroundColor: Color = new Color();
let iterator: number = 0;
let iteratorCount = 0;
while (fontColor.contrast(backgroundColor.rgb) <= 6) {
  console.log("Round, ", iteratorCount);
  iteratorCount++;
  iterator++;
  backgroundColor = new Color();
  if(iterator > 10) {
    fontColor = new Color();
    iterator = 0;
  }
}
document.body.style.color = fontColor.hex;
document.body.style.backgroundColor = backgroundColor.hex;
