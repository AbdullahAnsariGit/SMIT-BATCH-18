let game = true;
let element = document.getElementById("element");
element.style.left = window.innerWidth / 2 + "px";

let position = window.innerWidth / 2;
document.onkeydown = function (e) {
  let element = document.getElementById("element");
  let speed = 30;
  if (e.key === "a") {
    element.style.left = position + "px";
    position >= 10 && (position -= speed);
  } else if (e.key === "d") {
    element.style.left = position + "px";
    position <= window.innerWidth - (50 + speed) && (position += speed);
  }
};

function mainFunc() {
  let gameContainer = document.getElementById("gameContainer");
  let randomEnemyPosition = Math.round(Math.random() * window.innerWidth);
  enemy.id = "enemy";
  enemy.style.width = "60px";
  enemy.style.height = "60px";
  enemy.style.background = "red";
  enemy.style.position = "absolute";
  enemy.style.top = "0px";
  enemy.style.left = randomEnemyPosition + "px";
  console.log(randomEnemyPosition);

  gameContainer.appendChild(enemy);
  moveEnemy();
}
let enemy = document.createElement("div");
let x = 0;
let speed = 2;
function moveEnemy() {
  x += speed;
  console.log(x);
  console.log(window.innerHeight);

  enemy.style.top = x + "px";
  if (x >= window.innerHeight - 60) {
    speed == window.innerHeight + 60;
  } else {
    requestAnimationFrame(moveEnemy);
  }
}

mainFunc();
