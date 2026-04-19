const users = [
  {
    name: "Kashan",
    id: 1,
    email: "fullstackdevkashan@gmail.com",
  },
  {
    name: "Abdullah",
    id: 2,
    email: "abdullahansari@gmail.com",
  },
  {
    name: "Minhaj",
    id: 3,
    email: "hello@gmail.com",
  },
];
function profileScreen() {
  users.map((item) => {
    // console.log(item);  
    profileDetailScreen(item);
  });
}

function profileDetailScreen(user) {
  const { name: username, ...rest } = user;
  console.log(username);
  console.log(rest);
}
profileScreen();

// const numbers = [10, 20, 30];

// const [b, , ...c] = numbers;

// console.log(b, c);
