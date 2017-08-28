import { rgbToHex, changeHue, luminance } from './color-modifiers';

export default class Color {
  rgb: number[];
  red: number;
  green: number;
  blue: number;
  median: number;
  hex: string;
  constructor(red: number = createColor(), green: number = createColor(), blue: number = createColor()) {
    this.rgb = [red, green, blue];
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.median = (this.red + this.green + this.blue) / 3;
    this.hex = rgbToHex(this.red, this.green, this.blue);
  }
  hue(changeHueBy: number): string {
    return changeHue(this.hex, changeHueBy);
  }

  contrast(rgb1: number[]): number {
    let contrastValue = (luminance(rgb1[0], rgb1[1], rgb1[2]) + 0.05)
      / (luminance(this.rgb[0], this.rgb[1], this.rgb[2]) + 0.05);
      console.log(contrastValue);
    return contrastValue;
  }
}

function createColor(): number {
  return Math.ceil(Math.random() * 255);
}
