class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.input = new InputHandler(this);
    this.ui = new UI(this);
    this.keys = [];
    this.ammo = 20;
    this.maxAmmo = 50;
    this.ammoInterval = 500;
    this.ammoTimer = 0;
    this.enemies = [];
    this.enemyTimer = 0;
    this.enemyInterval = 1000;
    this.gameOver = false;
    this.score = 0;
    this.winningScore = 30;
  }

  update(deltaTime) {
    this.player.update(deltaTime);

    //ammo
    if (this.ammoTimer > this.ammoInterval) {
      if (this.ammo < this.maxAmmo) this.ammo++;
      this.ammoTimer = 0;
    } else {
      this.ammoTimer += deltaTime;
    }

    //enemy
    this.enemies.forEach((enemy) => {
      enemy.update();

      //mark enemy for deletion if collision occurs
      if (this.checkCollision(this.player, enemy)) {
        enemy.markedForDeletion = true;
      }

      //check for collision between projectiles and emenies
      this.player.projectiles.forEach(projectile => {
        if (this.checkCollision(projectile, enemy)) {
          enemy.lives--;
          projectile.markedForDeletion = true;
          // check if enemy has lives left
          if (enemy.lives <= 0) {
            enemy.markedForDeletion = true;
            this.score += enemy.score;
            if (this.isWin()) this.gameOver = true;
          }
        }
      })
    });
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);

    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy();
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }
  }

  draw(context) {
    this.player.draw(context);
    this.ui.draw(context);
    this.enemies.forEach((enemy) => enemy.draw(context));
  }

  addEnemy() {
    const randomize = Math.random();
    //choose what kind of enemy to draw
    if (randomize < 0.5) this.enemies.push(new Angler1(this));
    else this.enemies.push(new Angler2(this));
  }

  checkCollision(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect2.x < rect1.x + rect1.width &&
      rect1.y < rect2.y + rect2.height &&
      rect2.y < rect1.y + rect1.height
    );
  }

  isWin() {
    return this.score >= this.winningScore;
  }
}
