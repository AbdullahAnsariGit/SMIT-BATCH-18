// // import { useState } from "react"


// // function App() {
// //   const [count, setCount] = useState(0)
// //   const [data, setData] = useState([])
// //   function handleIncrement() {
// //     // count = count + 1 
// //     setCount(count + 1)
// //     console.log(count)
// //   }
// //   function handleDecrement() {
// //     if (count > 0) {
// //       setCount(count - 1)
// //       console.log(count)
// //     }
// //   }
// //   return (
// //     <>
// //       <button onClick={handleIncrement}>Increment</button>
// //       <h1>{count}</h1>
// //       <button onClick={handleDecrement}>Decrement</button>
// //     </>
// //   )
// // }

// // export default App


// // function App() {
// //   // let [isShow, setIsShow] = useState(false)
// //   // function handleShow() {
// //   //   setIsShow(true)
// //   // }
// //   // function handleHide() {
// //   //   setIsShow(false)
// //   // }
// //   return (
// //     <div>
// //       <button onClick={handleShow}>Show</button>
// //       <button onClick={handleHide}>Hide</button>
// //       {isShow && <div>
// //         iPhone 19 pro
// //       </div>}
// //     </div>
// //   )
// // }
// // export default App



// // import React, { useState } from 'react'
// // import './App.css'

// // function App() {
// //   const [isDark, setIsDark] = useState(false)

// //   // const handleChangeTheme = () => {
// //   //   setIsDark(!isDark)
// //   // }
// //   console.log(isDark, "is dark log")
// //   return (
// //     <div style={{ height: "100vh", width: '100%', backgroundColor: isDark ? "black" : "bisque" }}>
// //       <button onClick={handleChangeTheme}>
// //         {`Change to ${isDark ? "Light" : "Dark"}`}
// //       </button>
// //     </div>
// //   )
// // }

// // export default App


// import React, { useState } from 'react'

// function App() {
//   const [users, setUsers] = useState([
//     { name: 'ali', age: 20, address: "abc - gulshan" }
//     , { name: 'kashan', age: 20, address: 'ahs - nazimabad' }]);

//   const handleAddUser = () => {
//     setUsers((prev) => [...prev, { name: prompt("Add name"), age: prompt("add age"), address: prompt("add address") }])
//   }


//   // let usersA = { name: 'abc', age: 28, address: "hdhdhd" }


//   // const { name, ...rest } = usersA
//   // console.log("name", name)
//   // console.log("rest", rest)

//   // const newUsers = { ...usersA, fName: 'abc' }

//   // console.log('newUsers', newUsers)
//   return (
//     <div>
//       {users.map((user, userIndex) => {
//         console.log(user)
//         console.log(userIndex);
//         return (<div style={{ border: "1px solid black" }}>
//           <h1>{user?.name}</h1>
//           <p>{user?.age}</p>
//           <p>{user?.address}</p>
//         </div>)
//       })}

//       <button onClick={handleAddUser}>ADD NEW USER</button>
//     </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  function handleAPICall() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  useEffect(() => {
    // 1. This code runs when the component MOUNTS

    return () => {
      // 2. This code runs when the component UNMOUNTS
      console.log("Component has unmounted!");
    };
  }, []); // <-- Empty array ensures this only triggers on mount/unmount


  return (
    <div>

      <button onClick={() => setCount(++count)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(--count)}>-</button>
    </div>
  )
}

export default App