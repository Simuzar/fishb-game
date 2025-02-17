class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 25;
    this.fontFamily = "Helvetica";
    this.color = "yellow";
  }

  draw(context) {
    context.save();
    context.fillStyle = this.color;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "black";
    context.font = this.fontSize + "px " + this.fontFamily;
    // points
    context.fillText("Score: " + this.game.score, 20, 40);
    // show lose or win message
    if (this.game.gameOver) {
      context.textAlign = "center";
      let message1;
      let message2;
      if (this.game.isWin()) {
        message1 = "You win!";
        message2 = "Good job!";
      } else {
        message1 = "You lost!";
        message2 = "Better luck next time!";
      }
      context.font = "70px " + this.fontFamily;
      context.fillText(
        message1,
        this.game.width * 0.5,
        this.game.height * 0.5 - 20
      );
      context.font = "25px " + this.fontFamily;
      context.fillText(
        message2,
        this.game.width * 0.5,
        this.game.height * 0.5 + 20
      );
    }
    for (let i = 0; i < this.game.ammo; i++) {
      context.fillRect(5 * i + 20, 50, 3, 20);
    }
    context.restore();
  }
}
