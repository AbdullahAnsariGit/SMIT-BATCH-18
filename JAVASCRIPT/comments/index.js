//Single line comments
//Random funtion use for random values

//Multiline comment
/*
function randomFunction() {
  let a = "a";
  return a;
}
*/

//Events

// function chipa() {
//   alert("Chipa zindabad");
// }

// function handleChange(e) {
//   console.log(e);
// }

// function handleMouseOver() {
//   console.log("Mouse is on the cat");
// }

function readmore() {
  let paragraph =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium accusantium enim aliquam minus debitis dolor mollitia a, nihil commodi! Est, nesciunt? Ullam, commodi ipsum. Dolor autem magni temporibus voluptates! <button onclick="readless()">Read Less</button>';

  // document object model (DOM)
  // document kiya he? HTML
  //   console.log(document.getElementById("para"));

  document.getElementById("para").innerHTML = paragraph;
}

function readless() {
  let para =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit.<button onclick='readmore()'>Read More</button>";
  document.getElementById("para").innerHTML = para;
}
