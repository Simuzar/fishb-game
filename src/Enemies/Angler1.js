class Angler1 extends Enemy {
    constructor(game) {
        super(game);
        this.width = 228 * 0.2;
        this.height = 169 * 0.2;
        this.y = Math.random() * (this.game.height * 0.95 - this.height); //set the y of enemy so it apperps only inside the canvas
        this.color = 'red';
    }
}