class Enemy {
  constructor(game) {
    this.game = game;
    this.x = this.game.width;
    this.speedX = Math.random() * -1.5 - 2.5; //will get a value from -4 to -2.5
    this.markedForDeletion = false;
  }

  update() {
    this.x += this.speedX; //move the position of enemy from the  right border of canvas
    if (this.x + this.width < 0) this.markedForDeletion = true; // delete the enemy if it crosses the left border of the canvas
  }

  draw(context) {
    context.fillStyle = this.color; //set enemy's color
    //draw enemy
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
