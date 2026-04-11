// // Basic Callback Example

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// function processUserInput(callback) {
//     const name = "Alice";
//     callback(name);        // Calling the callback
// }

// processUserInput(greet);   // Output: Hello, Alice!

// function hello(name) {
//   console.log("hello "+ name);
// }

// function test(callback) {
//     let name = "abdullah"
//     callback(name)
// }

// test(hello)

// function getResult(result) {
//   console.log("Sum is:", result); // Output: Sum is: 15
// }

// function calculate(a, b, callback) {
//   const result = a + b;
//   callback(result); // executed immediately
// }

// calculate(5, 10, getResult);




function showOutput(data) {
  console.log(data);
}

// cb => callback
function fetchData(cb) {
  let dataArray = undefined;
  setTimeout(() => {
    if (dataArray) {
      cb("Data fetched successfully");
    } else {
      cb("Getting error while fetching data, no data");
    }
  }, 2000);
}

fetchData(showOutput);
