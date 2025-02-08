window.addEventListener('load', function () {
    // canvas setup
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;

    const game = new Game(canvas.width, canvas.height);

//animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.draw(ctx);
    game.update();
    requestAnimationFrame(animate);
}

animate();
})
