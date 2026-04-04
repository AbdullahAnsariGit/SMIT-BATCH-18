// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// console.log("3");

// setTimeout(() => {
//   console.log("4");
// }, 100);

// console.log("5");

const students = [
  {
    name: "Emma",
    age: 21,
    grade: 88,
    city: "Toronto",
    hobbies: ["reading", "coding"],
  },
  {
    name: "Liam",
    age: 19,
    grade: 76,
    city: "Vancouver",
    hobbies: ["gaming", "sports"],
  },
  {
    name: "Olivia",
    age: 22,
    grade: 92,
    city: "Toronto",
    hobbies: ["music", "travel"],
  },
  {
    name: "Noah",
    age: 20,
    grade: 65,
    city: "Montreal",
    hobbies: ["art", "coding"],
  },
  {
    name: "Ava",
    age: 21,
    grade: 95,
    city: "Vancouver",
    hobbies: ["reading", "sports"],
  },
];

let box = document.getElementById("box");

(async function () {
  let result = await localStorage.getItem("students");
  let studentsData = JSON.parse(result) || [];
  studentsData.map((item) => {
    let p = document.createElement("p");
    p.innerText = item.name;
    box.appendChild(p);
  });
})();

function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
  location.reload();
}

function clearAll() {
  localStorage.removeItem("students");
  location.reload();
}
