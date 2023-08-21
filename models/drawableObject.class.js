class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
    x = 50;
    y = 50;
    height = 80;
    width = 100;

    loadImage(path) {
        imagesToLoad++;
        this.img = new Image();
        this.img.onload = () => {
            imagesLoaded++;
            percent = (imagesLoaded / imagesToLoad) * 100;
            document.getElementById('loadbeam').innerHTML = `
            <div class="loadbeam-progress" style="width: ${percent}%"></div>
            <div class="loadbeam-percent">${percent.toFixed(2)}%</div>
          `;
            if (percent == 100) {
                document.getElementById('loadscreen').classList.add('d-none');
                gameRunning = true;
            }
        };
        this.img.src = path;
    }

    /**
   * Resolves the index of the image to use based on the percentage value.
   * @returns {number} The index of the image to use.
   */
  resolveImageIndex() {
    if (this.percentage >= 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
      
    
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6; 0, Rest 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}