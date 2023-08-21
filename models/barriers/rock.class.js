class Rock extends DrawableObject {
    IMAGE = 'img/3. Background/Barrier/2.png';
    width = 260;
    height = 550;

    constructor() {
        super().loadImage('img/3. Background/Barrier/2.png');
        this.y = 350;
        this.x = 1000;
    }
}


