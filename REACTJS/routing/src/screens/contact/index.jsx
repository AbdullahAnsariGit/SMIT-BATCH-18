import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <h1>Contact</h1>
      <button onClick={() => navigate("/about")}>Navigate to home</button>
    </div>
  );
}

export default Contact;
