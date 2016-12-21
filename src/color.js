export class Color {
    constructor() {
        this.rgb = [100, 0, 0];
        this.red = this.rgb[0];
        this.green = this.rgb[1];
        this.blue = this.rgb[2];
        this.contrast = (this.red + this.green + this.blue) / 3;
        this.hex = "#" + ((1 << 24) + (this.red << 16) + (this.green << 8) + this.blue).toString(16).slice(1);
    }
}
