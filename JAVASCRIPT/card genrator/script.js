function generateCard() {
  const imageFile = document.getElementById("image").value;
  const name = document.getElementById("name").value;
  const fatherName = document.getElementById("fathername").value;
  const cnic = document.getElementById("cnic").value;
  const course = document.getElementById("course").value;

//   const imageFile = imageInput.files[0];

  let card_main_container = document.getElementById("card_main_container");
  // Creating Elements
  let card = document.createElement("div");
  let img = document.createElement("img");
  let profile_img = document.createElement("img");
  let h1 = document.createElement("h1");
  // Adding Properties to Elements
  card.id = "card-1";
  card.className = "card";
  img.src = "https://lms.saylanimit.com/logo.png";
  img.width = "150";
  profile_img.src = imageFile;
  h1.innerText = name
  profile_img.className = "profile_image";
  // appending all element to html
  card_main_container.appendChild(card);
  let card_1 = document.getElementById("card-1");
  card_1.appendChild(img);
  card_1.appendChild(profile_img);
  card_1.appendChild(h1);
}
