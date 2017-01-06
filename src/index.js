import Color from './color';

require('../scss/start-page.scss');

const randomRed = Math.ceil(Math.random() * 255);
const randomGreen = Math.ceil(Math.random() * 255);
const randomBlue = Math.ceil(Math.random() * 255);
const color = new Color(randomRed, randomGreen, randomBlue);
document.body.style.color = color.hex;
document.body.style.backgroundColor = color.hue(Math.random() < 0.5 ? 100 : -100);
