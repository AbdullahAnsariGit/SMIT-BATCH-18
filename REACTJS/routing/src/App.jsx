import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import About from "./screens/about";
import Contact from "./screens/contact";
import Admin from "./screens/admin/Admin";
import Product from "./screens/admin/Product";
import AdminCategories from "./screens/admin/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="product" element={<Product />} />
          <Route path="category" element={<AdminCategories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
