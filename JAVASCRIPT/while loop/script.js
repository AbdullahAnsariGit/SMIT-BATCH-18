// for (let i = 0; i < 10; i++) {
//     console.log("the number is " + i)
// }

// var i = 0
// while(i<=10){
//     console.log("the number is " + i)
//     i++  
// }


// var i = 0
// do{
//     console.log("the number is " + i)
//     i++  
// }
// while(i == 10)



let items = ["biryani", "pizza"];
let choice;
let totalPrice = 0;

// Show available items
let menu = "What do you want to eat?\n";
for (let i = 0; i < items.length; i++) {
  menu += "- " + items[i] + "\n";
}

choice = prompt(menu).toLowerCase();

while (choice !== "biryani" && choice !== "pizza") {
  choice = prompt("Invalid choice! Please choose biryani or pizza").toLowerCase();
}

switch (choice) {
  case "biryani":
    let biryaniType = prompt("Biryani type?\nChicken or Beef").toLowerCase();
    let biryaniSize = prompt("Select size:\nSmall / Medium / Large").toLowerCase();

    if (biryaniType === "chicken") {
      if (biryaniSize === "small") totalPrice = 250;
      else if (biryaniSize === "medium") totalPrice = 350;
      else if (biryaniSize === "large") totalPrice = 500;
    } 
    else if (biryaniType === "beef") {
      if (biryaniSize === "small") totalPrice = 300;
      else if (biryaniSize === "medium") totalPrice = 450;
      else if (biryaniSize === "large") totalPrice = 600;
    }

    alert(
      "Order: " + biryaniType + " biryani\n" +
      "Size: " + biryaniSize + "\n" +
      "Price: Rs " + totalPrice
    );
    break;

  case "pizza":
    let pizzaType = prompt("Pizza type?\nChicken or Beef").toLowerCase();
    let pizzaSize = prompt("Select size:\nSmall / Medium / Large").toLowerCase();
    let flavour = prompt(
      "Select flavour:\nFajita\nSeekh\nChicken Tikka"
    );

    if (pizzaType === "chicken") {
      if (pizzaSize === "small") totalPrice = 800;
      else if (pizzaSize === "medium") totalPrice = 1200;
      else if (pizzaSize === "large") totalPrice = 1600;
    } 
    else if (pizzaType === "beef") {
      if (pizzaSize === "small") totalPrice = 900;
      else if (pizzaSize === "medium") totalPrice = 1400;
      else if (pizzaSize === "large") totalPrice = 1800;
    }

    alert(
      "Order: " + pizzaType + " pizza\n" +
      "Size: " + pizzaSize + "\n" +
      "Flavour: " + flavour + "\n" +
      "Price: Rs " + totalPrice
    );
    break;
}
