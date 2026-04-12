// -----------------------------------------------------------------
// // With Callback
// function cb(result) {
//   console.log(result);

//   let showData = document.getElementById("data");
//   result.map((item) => {
//     showData.innerHTML += item.name + "<br />";
//   });
// }

function fetchData(cb) {
  console.log("Loading...");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(cb);
}

// fetchData(cb);

// -----------------------------------------------------------------
// Without  Callback
// function fetchData() {
//   console.log("Loading...");
//   let result = fetch("https://jsonplaceholder.typicode.com/users");

//   let showData = document.getElementById("data");
//   result.map((item) => {
//     showData.innerHTML += item.name;
//   });
// }

// fetchData();

// -----------------------------------------------------------------
// // Apna Method Fetch Ki jagah Khud ka Fetch
// const getAbdullah = (url, method = "GET") => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onload = function () {
//       if (xhr.status === 200 || xhr.status === 201 || xhr.status === 202) {
//         resolve(JSON.parse(xhr.responseText));
//       } else if (xhr.status >= 400 && xhr.status < 501) {
//         reject(xhr.status, "Failed");
//       }
//     };
//     xhr.send();
//   });
// };

// // With Callback
// function cb(result) {
//   console.log(result);

//   let showData = document.getElementById("data");
//   result.map((item) => {
//     showData.innerHTML += item.name + "<br />";
//   });
// }

// function fetchData(cb) {
//   console.log("Loading...");
//   getAbdullah("https://jsonplaceholder.typicode.com/users").then(cb);
// }

// fetchData(cb);

// -----------------------------------------------------------------
// async function loadUserProfile() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const user = await res.json();

//     console.log("User loaded:", user);

//     return { user };
//   } catch (err) {
//     console.error("Something went wrong", err);
//   }
// }

// // Call it
// loadUserProfile().then((result) => console.log(result));
