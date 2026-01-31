// // for keyword : loops
// // if keyword
// // let, var, const keyword : create variable
// // alert() show the value to the user
// // prompt() get the value from user
// // console

// // function
// let val1 = document.getElementById("val-1");
// let val2 = document.getElementById("val-2");
// let val3 = document.getElementById("val-3");

// function sum() {
//   let a = 9;
//   let b = 10;

//   let a1 = 2267;
//   let b1 = 10;

//   let a2 = 4;
//   let b2 = 10;

//   let sum1 = a + b;
//   let sum2 = a1 + b1;
//   let sum3 = a2 + b2;

//   val1.innerHTML = sum1;
//   val2.innerHTML = sum2;
//   val3.innerHTML = sum3;
//   console.log(sum);
// }

// sum();

//extra code
// let val1 = document.getElementById("val-1");
//   val1.innerHTML = add;

// let argument1 = +prompt("Enter any number 1");
// let argument2 = +prompt("Enter any number 2");

// function sum(parameter1, parameter2) {
//   let add = parameter1 + parameter2;

//   return add;
// }

// let a = sum(2, 5); // 7
// let b = sum(243, 2345);
// let c = sum(923, 23681);

// console.log(a);
// console.log(b);
// console.log(c);
// let shippingCharges =+ ;

// Data Taking from customer

let productPrice = +prompt("Enter your product price");
let country = prompt("Enter your country");
let city = prompt("Enter your city");
let referCode = prompt("Enter your referCode");

function checkout(productPrice, referCode) {
  // Variables
  let shippingCharges = 0;
  let RDA = 0;
  let tax = 0;
  let total;

  // Referal Discount Code (RDA)
  if (referCode && referCode === "KA90") {
    RDA = productPrice - (productPrice / 100) * 90; // 90% OFF
  } else if (referCode && referCode === "AB20") {
    RDA = productPrice - (productPrice / 100) * 20; // 20% OFF
  } else {
    RDA = productPrice; // 0% OFF
  }
  // RDA = 10
  
  // Shipping Calculation
  if (country == "pakistan" && city === "karachi") {
    shippingCharges = 200;
  } else if (country == "china" && city === "shanghai") {
    shippingCharges = 900;
  } else {
    alert("Country or City is not included in the shipping!");
    return;
  }

  // Tax Calculation
  tax = (RDA / 100) * 13;
  total = shippingCharges + RDA + tax;
  return total;
}

let total = checkout(productPrice, referCode);

console.log(total);
