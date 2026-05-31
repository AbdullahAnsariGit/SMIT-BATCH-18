import React, { useEffect, useState } from "react";

function App() {
  // best practice
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Not best practices
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");

    localStorage.setItem("user", JSON.stringify(formData));
  };
  useEffect(() => {}, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter your email"
            required
          />
        </div>

        <br />

        <div>
          <label>Phone No:</label>
          <br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="Enter your phone number"
            required
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({ name: "", email: "" });
//   return (
//     <div>
//       <input
//         className="hello"
//         type="text"
//         onChange={(data) => console.log(data)}
//       />
//       <input
//         type="text"
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//       <button></button>
//     </div>
//   );
// }

// export default App;
