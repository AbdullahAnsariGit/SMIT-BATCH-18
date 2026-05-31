import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
