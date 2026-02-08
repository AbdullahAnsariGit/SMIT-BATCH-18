function raat() {
  let dog = document.getElementById("dog");
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");
  let sky = document.getElementById("sky");
  let grass = document.getElementById("grass");
  let zombie = document.getElementById("zombie");
  let hut = document.getElementById("cabin");
  let birds = document.getElementById("birds");
  let scenre = document.getElementsByClassName("scenre")[0];
  dog.style.transform = "translateX(700px)";
  setTimeout(() => {
    dog.style.zIndex = "9000";
    sun.style.opacity = 0;
    moon.style.opacity = 1;
    birds.style.opacity = 0;
    zombie.style.opacity = 1;
    zombie.style.transform = "translateX(900px)";
    moon.style.filter = "brightness(70%)";
    sky.style.filter = "brightness(20%)";
    hut.style.filter = "brightness(40%)";
    grass.style.filter = "brightness(20%)";
    scenre.style.backgroundColor = "#262D34";
  }, 2500);
}
