import React, { useState } from "react";
import "./adminProduct.css";
import { useNavigate } from "react-router-dom";

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price) return;

    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, form]);
    }

    setForm({ name: "", price: "", category: "", stock: "" });
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };



  return (
    <div className="admin-container">
      <div className="main">
        <h1>Product Management</h1>

        {/* Form */}
        <form className="product-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
          />

          <button type="submit">
            {editIndex !== null ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.category}</td>
                  <td>{p.stock}</td>
                  <td>
                    <button className="edit" onClick={() => handleEdit(i)}>
                      Edit
                    </button>
                    <button className="delete" onClick={() => handleDelete(i)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="empty">
                    No products added
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
