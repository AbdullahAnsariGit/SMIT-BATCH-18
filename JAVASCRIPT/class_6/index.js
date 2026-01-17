// Array methods
// Push - Add element in the end of an array
// Pop - Remove element in the end of an array
// Shift - Remove element in the start of an array
// UnShift - Add element in the start of an array
// Splice - Remove add at any position in an array
// Slice - 
// Length

// var names = ["Anas", "Abdullah", "Imran", "Nawaz", "Bhutto"];


// names.unshift("Yahya")
// Option:
// Null
// NAN
// Error
// Remove last element


// console.log("Name list updated***", names)


// Splice 3 parameters 
// 1- Start index of an element;
// 2- Delete count, how many items you want to delete;
// 3- Adding elements 


// var names = ["Anas", "Abdullah", "Imran", "Nawaz", "Bhutto"];
// names.splice(1, 2, "Shagufta", "Halima", "Asim")
// console.log("Name list updated***", names)


// Anas shagufta halima asim nawaz bhutto - Azan & Hamza & Muhammad
// Anas nawaz bhutto shagufta halima asim  - Shahmeer
// Anas shagufta halima nawaz bhutto - Saleh


// let tasks = [
//     "Wake up",
//     "Check emails",
//     "Attend meeting",
//     "Write report",
//     "Go to gym"
// ];


// tasks.shift();

// tasks.unshift("Brush teeth", "Make coffee");

// tasks.splice(3, 1);

// tasks.splice(3, 1, "Review code", "Fix bugs");

// tasks.pop();
// tasks.unshift("Go to gym");

// tasks.push("Sleep");

// tasks.splice(3, 1);

// console.log(tasks);








// Refrence
//              0        1          2        3       4

// var names = ["Anas", "Abdullah", "Imran", "Nawaz", "Bhutto"];


// var names2 = names.slice(1, 5);


// console.log("names2", names2);


// names2.push("Hello")





//                  0          1        2             3            4         5
// let countries = ["pakistan", "india", "america", "afghanistan", "china", "russia"]

// let copyCountries = countries.slice(2, 6); // ["america", "afghanistan", "china", "russia"]
// console.log();
