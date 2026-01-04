// Last Class Revision

// value se pehle + ae to vo he pre
// bad me post
// a++ this is post increment
// ++a this is pre increment

// let a = 1
// let b = a++ + ++a; // 4
// //       4  
// console.log(b);
// let a = 1
// let b = a-- + --a; //
// //       1  + (-1) = 0
// console.log(b);

// console.log(a++);
// console.log(++a);





// COMPARISION OPERATOR
// == only checks the value does not check the type if the value
// agar value same he or type alag phir bhi ye true return karega
// === it checks two things the value and the type also
// <  
// >  
// <= 
// >= 


// let wallet = "400";
// let product_price = 400;

// if (wallet > 0 && product_price <= wallet) {
//     console.log("Purchased Successfully!");
// } else {
//     console.log("Insufficient Balance Pese nhi he!");
// }



// let a = "1";

// if (a === 1) {
//     console.log("it is equals to 1");
// } else {
//     console.log("it not is equals to 1");
// }




// !== not equals to 
// let a = 90
// let b = 20
// if (a != b) {
//     console.log("It is not euqlas") // 
// } else {
//     console.log("It is equals!")
// }












// Atm Machine

// let sirAbdullahAccountPinCode = 5152;

// let userPincode = prompt("Enter your account pin code!")
// if (sirAbdullahAccountPinCode == userPincode) {
//     var card_limit = 50000
//     var atm_machine_balance = 200000 // 2 lack
//     var abdullah_ansari_account_balance = 20000000 // 2 core
//     var withdraw_amount = prompt("kitne pese nikalne he sir abdullah?", 0)

//     if (withdraw_amount > card_limit) {
//         alert("Card limit has reached!")
//     } else {
//         if ((withdraw_amount > 0 && withdraw_amount <= abdullah_ansari_account_balance) && withdraw_amount <= atm_machine_balance) {
//             alert(withdraw_amount + " Rupee account se nikal gae!")
//         } else if (withdraw_amount > atm_machine_balance) {
//             alert("Atm me " + (Number(withdraw_amount) - atm_machine_balance) + " rupee hen dosre atm jao beta!")
//         } else if (withdraw_amount == 0) {
//             alert("O bhai chal 0 rupe nikal waega!")
//         } else {
//             alert("ae gurbat teri kher to yahan")
//         }

//     }
// } else {
//     alert("Pin code galat he bhai!")
// }





let card_limit = 50000;
var withdraw_amount = "60000";

if (withdraw_amount > card_limit) {
  console.log("Limit Reached");
} else {
  console.log("Allowed");
}


var withdraw_amount = prompt("Enter amount", 0);

if (withdraw_amount > 0) {
  console.log("Allowed");
} else {
  console.log("Blocked");
}
