// let a = "abdullah";
// console.log(a);

// let student = {
//   name: "ali",
//   address: {
//     area: "gulshan",
//     city: "khi",
//     country: "pk",
//   },
// };

// let b ={}
// let c = new Object()

// let firstName = "Abdullah";
// let lastName = "Ansari";

// let fullName = `This is my full name ${firstName} ${lastName}!`;
// console.log(fullName)

// Nested object
// const detailedStudent = {
//   name: "Liam",
//   address: { city: "Vancouver", zip: "V5K 0A1" },
//   hobbies: ["gaming"]
// };

// console.log(detailedStudent?.hobbies[0])

// Non premitive
// let student = {
//   name: "abdullah",
//   age: 50,
// };

// let student2 = student; // Shallow copy

// student2.name = "ali";

// console.log(student2?.name);
// console.log(student?.name);

// let user = {
//     name: "ali",
//     age:22,
//     area:'nazimabad'
// }

// let user2 = {...user}

// user2.name = 'yahya'

// console.log(user.name)
// console.log(user2.name)

// let userDetails = {
//   name: "yahya",
//   address: {
//     city: "karachi",
//     country: "pakistan",
//   },
// };

// Deep copy // Deep cloning -> Works on nested objects layers
// let userDetails2 = JSON.parse(JSON.stringify(userDetails));
// Shallow Copy // Shallow cloning -> Only work on first layer
// let userDetails2 = {...userDetails};

// userDetails2.address.country = "iran heart";

// console.log(userDetails.address.country);
// console.log(userDetails2.address.country);

// let a = "abdullah";

// let b = a

// b = "ali"

// console.log(a)
// console.log(b)

// Copy the first student from our array, add a hobby array, then log without mutating original.

// const students = [
//   {
//     name: "Emma",
//     age: 21,
//     grade: 88,
//     city: "Toronto",
//     hobbies: ["reading", "coding"],
//   },
//   {
//     name: "Liam",
//     age: 19,
//     grade: 76,
//     city: "Vancouver",
//     hobbies: ["gaming", "sports"],
//   },
//   {
//     name: "Olivia",
//     age: 22,
//     grade: 92,
//     city: "Toronto",
//     hobbies: ["music", "travel"],
//   },
//   {
//     name: "Noah",
//     age: 20,
//     grade: 65,
//     city: "Montreal",
//     hobbies: ["art", "coding"],
//   },
//   {
//     name: "Ava",
//     age: 21,
//     grade: 95,
//     city: "Vancouver",
//     hobbies: ["reading", "sports"],
//   },
// ];

// // let copyFirstStudentFromArray = {...students[0]}; //Shallow copy
// let copyFirstStudentFromArray = JSON.parse(JSON.stringify(students[0])); //Deep copy
// copyFirstStudentFromArray.hobbies.push("war");
// copyFirstStudentFromArray.name = "abdullah"

// console.log(students);
// console.log(copyFirstStudentFromArray);

// const students = [
//   {
//     name: "Emma",
//     age: 21,
//     grade: 88,
//     city: "Toronto",
//     hobbies: ["reading", "coding"],
//   },
//   {
//     name: "Liam",
//     age: 19,
//     grade: 76,
//     city: "Vancouver",
//     hobbies: ["gaming", "sports"],
//   },
//   {
//     name: "Olivia",
//     age: 22,
//     grade: 92,
//     city: "Toronto",
//     hobbies: ["music", "travel"],
//   },
//   {
//     name: "Noah",
//     age: 20,
//     grade: 65,
//     city: "Montreal",
//     hobbies: ["art", "coding"],
//   },
//   {
//     name: "Ava",
//     age: 21,
//     grade: 95,
//     city: "Vancouver",
//     hobbies: ["reading", "sports"],
//   },
// ];

// let doubleAge = students.map((student) => {
//   console.log(student.age * 2);
// });

// const withStatus = students.map((s) => {
//   return { ...s, passed: s.grade > 70 ? "pass" : "failed" };
// });

// console.log(students);
// console.log(withStatus);






