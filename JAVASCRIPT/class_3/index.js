// if is a keyword
// parenthesis = ()
// if (condition) { // if conditon true
// output you want
//}

var a = 1;
// = assign
// == comparision
// 2 == 2 -> true

// true or false || Boolean
// if (a == 2) { // FALSE
//   console.log("true");
// }

// falsy value
// 0, false, "", undefeind, null, NaN, [], {}
// truth values
// 1 or any numbers
// var a = ; // NaN
// NaN
//true == false // false
// if (!false == false) {
//   console.log("valid value");
// } else {
//   console.log("invalid value");
// }
// var age = prompt("Enter your age:");

// answer kia he

// if (age >= 18) {
//   alert("you are eligible for driving!");
// }

/*
Ask the user for units consumed:
100 units → "Bill: Rs 1200"
200 units → "Bill: Rs 2400"
300 units → "Bill: Rs 1000"
Above 300 → "Bill: Rs 2000"
*/

// var unit_consumed = prompt("enter your unit that was used?");

// if (unit_consumed == 100) {
//   print("1200");
// } else if (unit_consumed == 200) {
//   print("2400");
// } else if (unit_consumed > 300) {
//   print("3500");
// }

// true    &&    true   -->     true
// false   &&    true   -->     false
// true    &&    false  -->     false
// false   &&    false  -->     false
/*
Ask the user for age and show ticket price:

Age below 5 → "Free ticket"
Age 5–12 → "Ticket: Rs 100"
Age 13–59 → "Ticket: Rs 200"
Age 60 or above → "Ticket: Rs 150"
*/
// var age = prompt("enter your age");
// var message = "Congratulations: Free Ticket";
// var message2 = "Ticket price is 100 for you!";
// var message3 = "Ticket price is 200 just for you!";
// var message4 = "Ticket price is 150 for you!";

// if (age < 5) {
//   alert(message);
// }
// else if (age >= 5 && age <= 12) {
//   alert(message2);
// }
// else if (age >= 13 && age <= 59) {
//   alert(message3);
// }
// else {
//   alert(message4);
// }

// var x = 7;

// if (x > 10) {
//   console.log("A");
// } else if (x > 5) {
//   console.log("B");
// } else if (x > 6) {
//   console.log("C");
// }

// var a = 0;

// if (a && true) {
//   console.log("A");
// } else {
//   console.log("B");
// }

// var x;// undefiend

// if (x == 0) {
//   console.log("Zero");
// } else if (x == undefined) {
//   console.log("Undefined");
// } else {
//   console.log("Other");
// }

// var n = 5;

// if (n > 5) {
//   console.log("A");
// } else if (n >= 5) {
//   console.log("B");
// } else if (n == 5) {
//   console.log("C");
// }

// var a = 1;

// if (a < 2 < 3) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// var a = 0;
// var b = "0"; // true
// var c = false;
//  // FALSE ||FALSE
// if (a || b && c) {
//   console.log("A");
// } else {
//   console.log("B");
// }

// var x = 5;
//  // false     false   || true
// if (x > 10 && x++ > 5 || x == 5) {
//   console.log(x); //
// } else {
//   console.log("No");
// }

var a = 20; //
//         20  - 20  + 21 + 21
console.log(a++ - --a + ++a + a++ + a);
//  1++ - --1 + ++a + a++
// 2
// 1
// 5
// 4

// if (a && a ==d 1 || a == 2 && a++) {
//   console.log(a);
// } else {
//   console.log("Fail");
// }
