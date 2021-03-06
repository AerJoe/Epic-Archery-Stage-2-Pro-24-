    class ComputerArcher {
        constructor(x, y, width, height, angle) {
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.angle = angle;
          this.image = loadImage("assets/computerArcher.png")
        }
        display() {
          if (keyIsDown(RIGHT_ARROW) && this.angle < 2.45) {
            this.angle += 0.02;
          }
      
          if (keyIsDown(LEFT_ARROW) && this.angle > 0.20) {
            this.angle -= 0.02;
          }
      
          push();
          translate(this.x, this.y);
          rotate(this.angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
          
        }
      }
      