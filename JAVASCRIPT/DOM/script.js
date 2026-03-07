// let heading = document.getElementById("heading");
// let colors = ["red", "green", "yellow", "blue", "black"];

// let i = 0;
// function changeColor() {
//   heading.style.backgroundColor = colors[i];
//   i++;
//   if (i == 5) {
//     i = 0;
//   }
//   heading.style.color = "white";
// }

// let visible = true;
// function show() {
//   let btn= document.getElementById("btn");
//   let element = document.getElementById("accordian");
//   if (visible) {
//     element.style.display = "none";
//     visible = false;
//     btn.style.transform = "rotate(270deg)"
// } else {
//     element.style.display = "block";
//     btn.style.transform = "rotate(90deg)"
//     visible = true;
//   }
// }

// const box1 =
//  document.getElementsByClassName("box-1");

// const h1 = document.getElementsByTagName("H1");

// function changeColor() {
//   for (let i = 0; i < h1.length; i++) {
//     h1[i].style.color = "red";
//   }
// }

// console.log(box1);
// box1.innerText = "Hello Worlds"
// 9 -4
// 10 -4
//   box1[box1.length - 4].style.color = "red";

//   for (let i = 0; i < box1.length; i++) {
//     const element = box1[i];
//     element.style.color = "red";
//   }

function swap() {
  // let heading1 = document.getElementById("heading1");
  // let heading2 = document.getElementById("heading2");
  // let image = document.getElementsByClassName("image");
  // image[0].src = "./image2.webp"
  // image[0].width = "100"
  //   for (let i = 0; i < image.length; i++) {
  //     const element = image[i]
  //     console.log(element);
  //   }
  // heading1.innerText = "Abdullah";
  // heading2.innerText = "Kashan";

  // let heading = document.getElementsByTagName("h1");

  // heading[0] = "<p>Kashan</p>";
  // heading[1] = "<p>Kashan</p>";

  // heading[0].innerText = "<p>Abdullah</p>";
  // heading[1].innerText = "<p>Abdullah</p>";

  // let body = document.getElementsByTagName("body");
  // body[0].innerHTML = "<p>Abdullah</p><p>Kashan</p><button onclick='swap()'>Show headings</button>"
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
}
