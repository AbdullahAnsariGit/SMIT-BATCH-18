const nameInput = document.getElementById("name");
const descInput = document.getElementById("desc");
const priceInput = document.getElementById("price");
const imgInput = document.getElementById("img");
const addBtn = document.getElementById("addProduct");
const container = document.getElementById("productContainer");

addBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const desc = descInput.value.trim();
  const price = priceInput.value.trim();
  const img = imgInput.value.trim();

  if (!name || !price) {
    alert("Name and Price are required!");
    return;
  }

  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = img || "https://via.placeholder.com/200";

  const title = document.createElement("h3");
  title.textContent = name;

  const description = document.createElement("p");
  description.textContent = desc;

  const priceTag = document.createElement("span");
  priceTag.classList.add("price");
  priceTag.textContent = "$" + price;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    card.remove();
  });

  card.append(image, title, description, priceTag, deleteBtn);
  container.appendChild(card);

  nameInput.value = "";
  descInput.value = "";
  priceInput.value = "";
  imgInput.value = "";
});
