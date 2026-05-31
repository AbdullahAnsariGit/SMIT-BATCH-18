import React, { useState } from "react";
import "./adminCategories.css";

export default function AdminCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", items: 120, icon: "📱" },
    { id: 2, name: "Fashion", items: 80, icon: "👕" },
    { id: 3, name: "Home & Kitchen", items: 45, icon: "🏠" },
    { id: 4, name: "Sports", items: 60, icon: "⚽" },
    { id: 5, name: "Books", items: 30, icon: "📚" },
    { id: 6, name: "Beauty", items: 70, icon: "💄" },
  ]);

  return (
    <div className="category-page">
      {/* Header */}
      <div className="header">
        <h1>Categories</h1>
        <button className="add-btn">+ Add Category</button>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card">
          <h3>Total Categories</h3>
          <p>{categories.length}</p>
        </div>

        <div className="stat-card">
          <h3>Total Items</h3>
          <p>{categories.reduce((acc, c) => acc + c.items, 0)}</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid">
        {categories.map((cat) => (
          <div key={cat.id} className="card">
            <div className="icon">{cat.icon}</div>

            <div className="info">
              <h2>{cat.name}</h2>
              <p>{cat.items} Products</p>
            </div>

            <div className="actions">
              <button>Edit</button>
              <button className="danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
