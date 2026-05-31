import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
export default function Admin() {
  const navigate = useNavigate();
  return (
    <div className="admin-container">
      <div style={{ display: "flex" }}>
        <div>
          <div className="admin-logo">Admin Panel</div>
          <ul className="admin-menu">
            <li>
              <button onClick={() => navigate("/product")}>Product</button>
            </li>
            <li>
              <button onClick={() => navigate("")}>Anylatics</button>
            </li>
            <li>
              <button onClick={() => navigate("/category")}>Category</button>
            </li>
            <li>
              <button onClick={() => navigate("")}>Orders</button>
            </li>
            <li>
              <button onClick={() => navigate("")}>Reviews</button>
            </li>
            <li>
              <button onClick={() => navigate("")}>Branches</button>
            </li>
            <li>
              <button onClick={() => navigate("")}>Complaints</button>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
