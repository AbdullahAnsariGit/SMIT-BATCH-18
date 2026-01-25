// console.log("Daniyal")
// console.log("Daniyal")
// console.log("Daniyal")
// console.log("Daniyal")
// console.log("Daniyal")
// console.log("Daniyal")
// console.log("Daniyal")
// console.log("Daniyal")
// console.log("Daniyal")
// console.log("Daniyal")

// 1;   1<=10 => true // Jaffar 1 ++
// 2;   2<=10 => true // Jaffar i++
// 3;   3<=10 => true // Jaffar i++
// 9;   9<=10 => true // Jaffar i++
// 10;   10<=10 => true // Jaffar i++
// 11;   11<=10 => false // end
// for (var i = 1; i <= 10; i++) {
//     console.log("Jaffar")
// }

// for (i = 0; i < 99; ++i) {
//     console.log(i)
// }
// three statement
// var i = 0; // initial value

// i < 100 // condition

// i++ // har bar ek ek bar badhatah rahe ga

// let number = prompt("konse number ko print karna he?")
// 1: decralation
// 2: condition
// 3: increment

//
// for (let i = 1; i <= 10; i++) {
//     console.log(number + " X " + i + " = " + number * i);
//     // console.log(number * i);
// }

// let firstnames = ["azan", "abdullah", "ali", "daniyal", "chipa", "ubaid"]
// let lastnames = ["qureshi", "ansari", "khan", "jamel", "sahab", "nazim"]

// 5 firstnames
// 5 lastnames

// for (let i = 0; i < firstnames.lenght; i++) {
//     console.log(firstnames[i] + " " + lastnames[i]);
// }

// let fullname = firstnames[i] + ' ' + lastnames[i]
// console.log(fullname)
// console.log(word.split("").reverse().join("") == word ? "Palindrome" : 'not palindrom');

// let word = prompt("Enter any word");

// let ultaword = ""
// for (let i = word.length - 1; i >= 0; i--) {
//     ultaword += word[i]
// }
// if (word == ultaword) {
//     console.log("Palindrome")
// } else {
//     console.log("Not Palindrome")
// }

// 'eye' == "eye" => true palindrome
// 'apple' == "elppa" => false

// "civic" == 'civic' == palindrome

// for (let i = 0; i < 5; i--) {

// }

// table ulti print

// 5 X 10 = 50
// 5 X 9 = 45
// 5 X 8 = 40
// 5 X 7 = 35
// 5 X 6 = 30
// 5 X 5 = 25
// 5 X 4 = 20
// 5 X 3 = 15
// 5 X 2 = 10
// 5 X 1 = 5

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

// 4 dafa chalega

// First
// azzan qureshi
// azzan ansari
// azzan khan
// azzan jamel
// azzan sahab
// azzan nazim

// second
// abdullah qureshi
// abdullah ansari
// abdullah khan
// abdullah jamel
// abdullah sahab
// abdullah nazim
//

// let firstnames = ["azan", "abdullah", "ali", "daniyal", "chipa", "ubaid"]
// let lastnames = ["qureshi", "ansari", "khan", "jamel", "sahab", "nazim"]

// let fullnames = []
// fullnames.push(firstnames[i] + " " + lastnames[j]);

/// 2
// 3
// 4 // true ek dafa *
// 0 < 2    ==> **  true
// 1 < 2    ==> **  true

// 0 < 3    ==> *   true
// 1 < 3    ==> **  true
// 2 < 3    ==> *** true
// 3 < 3    ==> *** false

// 0 < 4    ==> *   true
// 1 < 4    ==> **  true
// 2 < 4    ==> *** true
// 3 < 4    ==> **** true
// 4 < 4    ==> ***** false

// for (let i = 0; i <= 9; i++) {
//     let star = ""

//     for (let j = 0; j < i; j++) {
//         star += "*"
//     }
//     console.log(star);
// }

// let pakistanCricketTeam = [
//     "Babar Azam",
//     "Mohammad Rizwan",
//     "Shaheen Shah Afridi",
//     "Fakhar Zaman",
//     "Imam-ul-Haq",
//     "Shadab Khan",
//     "Haris Rauf",
//     "Naseem Shah",
//     "Hasan Ali",
//     "Iftikhar Ahmed",
//     "Abdullah Shafique",
//     "Mohammad Nawaz",
//     "Sarfaraz Ahmed",
//     "Saud Shakeel",
//     "Usman Khan",
// ];
// let indianCricketTeam = [
//     "Rohit Sharma",
//     "Virat Kohli",
//     "Shubman Gill",
//     "KL Rahul",
//     "Shreyas Iyer",
//     "Suryakumar Yadav",
//     "Hardik Pandya",
//     "Ravindra Jadeja",
//     "Ravichandran Ashwin",
//     "Jasprit Bumrah",
//     "Mohammed Shami",
//     "Mohammed Siraj",
//     "Kuldeep Yadav",
//     "Rishabh Pant",
//     "Ishan Kishan"
// ];

// let australiaCricketTeam = [
//     "Pat Cummins",
//     "Mitchell Starc",
//     "Josh Hazlewood",
//     "Nathan Lyon",
//     "Steve Smith",
//     "David Warner",
//     "Marnus Labuschagne",
//     "Travis Head",
//     "Glenn Maxwell",
//     "Marcus Stoinis",
//     "Cameron Green",
//     "Alex Carey",
//     "Josh Inglis",
//     "Adam Zampa",
//     "Mitchell Marsh"
// ];

// let cricketerName = prompt("enter any cricketer name").toLowerCase()
// let cricketFound = false
// let cricketerName2 = ""
// let countryName = ""

// for (let i = 0; i < pakistanCricketTeam.length; i++) {
//     if (cricketerName === pakistanCricketTeam[i].toLowerCase()) {
//         cricketFound = true
//         cricketerName2 = pakistanCricketTeam[i]
//         countryName = "Pakistan"
//     }
// }
// if (cricketFound) {
//     console.log("Cricketer " + countryName + " se he " + cricketerName2)
// } else {
//     console.log("Not found")
// }

// 0 + 1; = 1
// 1 + 1; = 2
// 2 + 1; = 3
// 3 + 1; = 4
// 4 + 1; = 5
// 5 + 1; = 6
// 0 to 6
// 1 to 6
// 0 to 5

// han bhai
//
//
//
// let final = 0;
// for (let initial = 6; final < initial; abdullah--) {
//   console.log(abdullah);
// }

// *
// **
// ***                   pattern
// ****
// *****
//  i = 1;  // j < i   0 < 1  // true "*"

//  i = 2;  // j < i   0 < 2 && 0 < 1  // true "**"

// let lenghtOfPyramid = 6;
// for (let i = 1; i < lenghtOfPyramid; i++) {
//   var stars = "";

//   for (let j = 0; j < i; j++) {
//     stars += "*";
//   }

//   console.log(stars);
// }

// let text = "this is a laptop";

// for (let i = 0; i < text.split(" ").length; i++) {
//   const element = text.split(" ")[i];
//   if (element === "laptop") {
//     console.log("laptop found");
//   }
// }

// {
// let text =
//   "World War II was going to happen by america. and russia was also going to do World War II becuase of the tarrifs";

// let promptFindingWord = prompt("Enter any word to find");

// for (let i = 0; i < text.length; i++) {
//   let text2 = text.slice(i, i + promptFindingWord.length);
//   if (text2 === promptFindingWord) {
//     alert("founded");
//     break;
//   }
// }

// "This is Worl"    ===  "World War II"   = false
// "his is World"    ===  "World War II"   = false
// "is is World "    ===  "World War II"   = false
// "s is World W"    ===  "World War II"   = false
// " is World Wa"    ===  "World War II"   = false
// "s World War "    ===  "World War II"   = false
// " World War I"    ===  "World War II"   = false
// "World War II"    ===  "World War II"   = true

//        text length is 112
// for (var i = 0; i < text.length; i++) {
//   // check everytime like the upper one
//   if (text.slice(i, i + 12).toLowerCase() === "World War II".toLowerCase()) {
//     console.log("found");
//   }
// }
// }

// {

// "This is Worl"    ===  "World War II"   = false
// "his is World"    ===  "World War II"   = false
// "is is World "    ===  "World War II"   = false
// "s is World W"    ===  "World War II"   = false
// " is World Wa"    ===  "World War II"   = false
// "s World War "    ===  "World War II"   = false
// " World War I"    ===  "World War II"   = false
// "World War II"    ===  "World War II"   = true
//        text length is 112
// check everytime like the upper one

// let text2 =
//   "world war II was going to happen by america. and russia was also going to do world war II because of the tarrifs";

// for (var i = 0; i < text2.length; i++) {
//   if (text2.slice(i, i + 12) === "because") {
//   }
// }

// }

// case sentive
// let countryName = "pakistan";

// let UserCountryName2 = prompt("Enter country name:").toLowerCase();

// if (countryName === UserCountryName2) {
//   console.log("found");
// } else {
//   alert("Wrong");
// }
// kashan adnan
// uppercase   | KASHAN ADNAN
// lowercase   | kashan adnan
// snakecase   | kashan_adnan
// camelcase   | kashanAdnan
// pascalcase  | KashanAdnan

// let isFound = text.indexOf("because");
// console.log(isFound);

// let text =
//   "This is World War II was going to happen by america. and russia was also going to do World War II becuase of the tarrifs"; // 112 characters

// let search;
// let findWord = prompt("search word here");
// let replaceWord = prompt("replace word here");

// let result;
// let result2;
// for (let i = 0; i < text.length; i++) {
//   search = text.slice(i, i + findWord.length);
//   if (findWord.toLowerCase() === search.toLowerCase()) {
//     result =
//       text.slice(0, i) +
//       replaceWord +
//       text.slice(i + findWord.length, text.length);
//     for (let i = 0; i < result.length; i++) {
//       search = result.slice(i, i + findWord.length);
//       if (findWord.toLowerCase() === search.toLowerCase()) {
//         result2 =
//           result.slice(0, i) +
//           replaceWord +
//           result.slice(i + findWord.length, result.length);
//       }
//     }
//   }
// }

// console.log(result);
// console.log(result2);

// let findWord = prompt("search word here");
// let replaceWord = prompt("replace word here");

// let text =
//   "This is World War II was going to happen by america. and russia was also going to do World War II becuase of the tarrifs";

// var output = text.replace(findWord, replaceWord);

// console.log(output);

// let number = Math.round(89.49);
// let number = Math.ceil(89.19);
// let number = Math.floor(89.99);
// let randomNumber = Math.round(Math.random()* 1000000);

// console.log(randomNumber);

// let number = 48.239746239;
// console.log(number.toFixed(4));

var rightNow = new Date();
let hours = rightNow.getHours();
let year = rightNow.getFullYear();
let date = rightNow.getDate();
let day = rightNow.getDay();
 
console.log(rightNow);
console.log(hours);
console.log(year);
console.log(date);
console.log(day);
