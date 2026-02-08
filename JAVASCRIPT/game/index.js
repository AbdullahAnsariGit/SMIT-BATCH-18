// getting main divs from the html
let gameContainer = document.getElementById("gameContainer");
let element = document.getElementById("element");
element.style.left = window.innerWidth / 2 + "px";

// setting game variables
let game = true;
let enemies = [];
let enemyCount = 1;
let enemySpeed = 2;
let enemyPosition = 0;
var count = 0;
let PLayerSpeed = 80;
let level = 0;

// initial position
let position = window.innerWidth / 2;
// coding for the movment of the player
document.onkeydown = function (e) {
  let element = document.getElementById("element");
  if (e.key === "a") {
    element.style.left = position + "px";
    position >= 10 && (position -= PLayerSpeed);
  } else if (e.key === "d") {
    element.style.left = position + "px";
    position <= window.innerWidth - (50 + PLayerSpeed) &&
      (position += PLayerSpeed);
  }
};
// genrating random hex code for color
function randomHexCode() {
  let randomHex =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  return randomHex;
}
// generating enemy
function generateEnemy() {
  enemies.push({
    id: count,
    title: "enemy-" + count,
    color: randomHexCode(),
    intialPosition: 0,
    verticalPostion: 2,
  });
  // Creating Enemy
  let enemy = document.createElement("div");
  // Generating Random Position
  let randomEnemyPosition = Math.round(Math.random() * window.innerWidth - 60);
  // Changin Styles Dynamicly
  enemy.className = "enemy-style";
  enemy.style.background = enemies[count].color;
  enemy.innerHTML = "<p>" + enemies[count].title + "</p>";
  enemy.style.left = randomEnemyPosition + "px";
  // Appending Enemy to the gameContainer
  gameContainer.appendChild(enemy);
  // let newEnimies = enemies;
  let newCount = count;

  // random movement of enemy
  function moveEnemy() {
    enemy.style.top = "0px";
    enemies[newCount].verticalPostion += 2;
    enemy.style.top = enemies[newCount].verticalPostion + "px";
    if (enemies[newCount].verticalPostion >= window.innerHeight) {
      enemySpeed == 2;
    } else {
      requestAnimationFrame(moveEnemy);
    }
  }
  moveEnemy();

  count++;
}

setInterval(() => {
  if (enemies.length == 50) {
    enemies = [];
    enemySpeed += 4;
    level++;
    count = 0;
    gameContainer.innerHTML = "<div id='element'></div>";
    let element = document.getElementById("element");
    element.style.left = window.innerWidth / 2 + "px";
  }
  console.log(enemies);

  generateEnemy();
}, 1000);
