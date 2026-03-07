// function handleCheckAge() {
//   let inputField = document.getElementById("inputField");
//   if (inputField.value >= 18) {
//     window.location.href = "https://www.justwatch.com/in/movies";
//   } else {
//     Swal.fire({
//       title: "Not eligible",
//       text: "You're under the 18",
//       icon: "error",
//     });
//   }
// }

function changeColor() {
  let container = document.querySelectorAll(".container");
  console.log(container);
  
  container.style.backgroundColor = "red";
}
