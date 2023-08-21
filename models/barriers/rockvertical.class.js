class Vertical extends DrawableObject {
    IMAGE = 'img/3. Background/Barrier/3.png';
    width = 300;
    height = 120;

    constructor() {
        super().loadImage('img/3. Background/Barrier/3.png');
        this.y = -20;
        this.x = 2300;
    }
}
