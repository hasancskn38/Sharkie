class Tunnel extends DrawableObject {
    IMAGE = 'img/3. Background/Barrier/1.png';
    width = 820;
    height = 480;

    constructor() {
        super().loadImage('img/3. Background/Barrier/1.png');
        this.y = 0;
        this.x = 101;
        const temp = this.width;
        this.width = this.height;
        this.height = temp;
    }
}


