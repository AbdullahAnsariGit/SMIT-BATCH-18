// // import React, { useState } from 'react'
// // import Groq from "groq-sdk";

// // const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });
// // const App = () => {
// //   let [prompt, setPrompt] = useState("")
// //   async function getGroqChatCompletion() {
// //     return groq.chat.completions.create({
// //       messages: [
// //         {
// //           role: "user",
// //           content: prompt,
// //         },
// //       ],
// //       model: "openai/gpt-oss-20b",
// //     });
// //   }
// //   async function main() {
// //     const chatCompletion = await getGroqChatCompletion();
// //     // Print the completion returned by the LLM.
// //     console.log(chatCompletion.choices[0]?.message?.content || "");
// //   }
// //   return (
// //     <div>

// //       <input type="text" onChange={(e) => setPrompt(e.target.value)} />
// //       <button onClick={main}>Generate</button>
// //     </div>
// //   )
// // }

// // export default App

// import React, { memo, useState } from 'react'
// const UserCard = memo(({ name, age }) => {
//   console.log("Child reRendereing")
//   return (
//     <div>
//       {`${name} ${age}`}
//     </div>
//   )
// })
// const App = () => {
//   console.log("parent reRenreding")
//   const [count, setCount] = useState(0)
//   return (

//     <div>

//       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
//       <UserCard name={"kashan"} age={12} />
//       {count}

//     </div>)
// }

// export default App


import React, { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(2);
  const [b, setB] = useState(132);

  console.log("🔄 App component rendered");

  function computeExpensiveValue(a, b) {
    console.log("💰 Expensive calculation is running...");
    return a + b;
  }

  const memoizedValue = useMemo(() => {
    console.log("🧠 useMemo is running...");

    return computeExpensiveValue(a, b);
  }, [a, b]);

  return (
    <div>
      <h1>useMemo Test</h1>

      <h2>Result: {memoizedValue}</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Change Count
      </button>

      <br />
      <br />

      <button onClick={() => setA(a + 1)}>
        Change A
      </button>

      <button onClick={() => setB(b + 1)}>
        Change B
      </button>
    </div>
  );
};

export default App;