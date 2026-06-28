import { useState, useEffect } from "react";
import { myBackend } from "./utils/supabase";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await myBackend.from("posts").select("*");

      if (data) {
        setTodos(data);
      }
    }

    getTodos();
  }, []);

  return (
    <div className="container">
      <h1>📋 My Posts</h1>

      <div className="cards">
        {todos.map((todo) => (
          <div className="card" key={todo.id}>
            <div className="card-header">
              <span className="id">#{todo.id}</span>
              <span className="date">
                {new Date(todo.created_at).toLocaleDateString()}
              </span>
            </div>

            <h2>{todo.title}</h2>

            <p>{todo.description}</p>

            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}