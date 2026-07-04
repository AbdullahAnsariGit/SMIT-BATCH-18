// import { useState, useEffect } from "react";
// import { supabase } from "./utils/supabase";
// import "./App.css";

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const [isFetching, setIsFetching] = useState(false)
//   useEffect(() => {
//     async function getPosts() {
//       const { data } = await supabase.from("posts").select("*");

//       if (data) {
//         setPosts(data);
//       }
//     }

//     getPosts();
//   }, [isFetching]);
//   console.log(posts);
//   async function handleDelete(id) {
//     setIsFetching(true)
//     const response = await supabase
//       .from('posts')
//       .delete()
//       .eq('id', id)
//     if (response) {
//       setIsFetching(false)
//       console.log("Deleted", response);
//     }
//   }
//   return (
//     <div className="container">
//       <h1>📋 My Posts</h1>

//       <div className="cards">
//         {posts.map((todo) => (
//           <div className="card" key={todo.id}>
//             <div className="card-header">
//               <span className="id">#{todo.id}</span>
//               <span className="date">
//                 {new Date(todo.created_at).toLocaleDateString()}
//               </span>
//             </div>

//             <h2>{todo.title}</h2>

//             <p>{todo.description}</p>

//             <button>View Details</button>
//             <button onClick={() => handleDelete(todo.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { supabase } from "./utils/supabase";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (mode === "signin") {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage("Login successful!");
      console.log("User:", data.user);
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "https://example.com/welcome",
        },
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage("Signup successful! Check your email for confirmation.");
      console.log("User:", data.user);
    }

    setEmail("");
    setPassword("");
  }

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "80px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        {mode === "signin" ? "Sign In" : "Sign Up"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <p style={{ marginTop: "15px", textAlign: "center" }}>
        {mode === "signin" ? (
          <>
            Don't have an account?{" "}
            <span style={linkStyle} onClick={() => setMode("signup")}>
              Sign Up
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span style={linkStyle} onClick={() => setMode("signin")}>
              Sign In
            </span>
          </>
        )}
      </p>

      {message && (
        <p
          style={{
            marginTop: "15px",
            textAlign: "center",
            color: message.includes("successful") ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#3ECF8E",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

const linkStyle = {
  color: "#3ECF8E",
  cursor: "pointer",
  fontWeight: "bold",
};

export default App;