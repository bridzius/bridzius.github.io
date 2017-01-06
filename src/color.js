import { rgbToHex, changeHue } from './color-modifiers';

export default class Color {
  constructor(red, green, blue) {
    this.rgb = [red, green, blue];
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.contrast = (this.red + this.green + this.blue) / 3;
    this.hex = rgbToHex(this.red, this.green, this.blue);
  }
  hue(changeHueBy) {
    return changeHue(this.hex, changeHueBy);
  }
}
