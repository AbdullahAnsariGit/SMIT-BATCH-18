function showData() {
  let cards = document.getElementById("cards");

  // foreach And map
  users.map((item, index) => {
    let cardDiv = document.createElement("div");
    cardDiv.innerHTML = `<p>${item.username} <br/> ${item.user_id} <br /> ${item.email} <br /> ${item.phone} <button onclick="handleDeleteUser('${item.user_id}')">Delete</button></p>`;
    cards.append(cardDiv);
  });
}

showData();

function handleDeleteUser(userId) {
  console.log(userId);

  fetch(`https://api.example.com/users/${userId}`, {
    method: "DELETE",
  });
}
