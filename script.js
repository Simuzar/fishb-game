window.addEventListener("load", function () {
  // canvas setup
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 1500;
  canvas.height = 500;

  const game = new Game(canvas.width, canvas.height);

  let lastTime = 0;

  //animation loop
  function animate(currentTime) { //calling the function again  will rewrite the currentTime param
    const deltaTime = currentTime - lastTime; //diff in millisec between animations
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.draw(ctx);
    game.update(deltaTime); //will update the animation depending on change of frame
    lastTime = currentTime;
    requestAnimationFrame(animate);
  }

  animate(0); // 0 as the first parameter during the first call
});
