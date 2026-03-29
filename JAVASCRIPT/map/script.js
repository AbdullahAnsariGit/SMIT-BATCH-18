// let arr2 = arr.map((item, index) => item * 2);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let arr2 = arr.map((item, index) => {
//     // console.log("item ==>" , item)
//     console.log("index ==>" , index)

//     return item * 2
// });

// console.log("arr2 ===>" , arr2);

// let arr = [1, 2, 3, 4];

// Expected output: [2,4,6,8]

//Q1 Solve this using map method in js, Without change the original array.

// let arr2 = arr.map((e, i) => {
//   let result = e * 2;
//   return result;
// });

// console.log(arr2, ":Expected Output");

// Expected Output: [42,38,44,42]

// const students = [
//   {
//     name: "Emma",
//     age: 21,
//     grade: 88,
//     city: "Toronto",
//     hobbies: ["reading", "coding"],
//     pass: true/false
//   },

// expected output : ["1. Emma", "2. Lia", "3. Ava", "4. Noah " ];

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

// let newStudent = students.map((items, index) => {
//     return { ...items, id: index + 1 };
// });

// console.log(newStudent);

// let filterAdultStudent = students.filter((item) => item.age > 20);
// let filterByGradeAndCity = students.filter(
//   (item) => item.grade > 80 && item.city === "Toronto",
// );

// // console.log(filterAdultStudent);

// console.log("filterByGradeAndCity", filterByGradeAndCity);

// let passStudentToronto = filterByGradeAndCity.map((item) => item.name);
// console.log(passStudentToronto);

// let abc = students

// let filterByCity = students.filter((items) => {
//   return items.city === "Toronto";
// });

// let mapNameAndGrade = filterByCity.map((items) => {
//   return { name: items.name, grade:   items.grade };
// });

// console.log(filterByCity, ":Filter By City");
// console.log(mapNameAndGrade, ":Map Filter city name and grade");

// let reduceMethod = students.reduce((accumulator, item) => {
//   //// Acculmulator ////
//   console.log(accumulator, "acc");
//   //// Item age ////
//   console.log(item.age, "items");
//   //// return the sum of both ////
//   return accumulator + item.age;
// });
// console.log(reduceMethod, "reduceMethod");

let top2 = students.reduce((accumulator, s) => {
  let stdGrade = s.grade;
  console.log(stdGrade);
  console.log(accumulator.grade);
  let bestGrade = accumulator.grade;

  return stdGrade > bestGrade ? s : accumulator.grade;
}, students[0]);

console.log(top2.name); // "Ava"
