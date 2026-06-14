import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "" },
    { name: "Products", path: "/product" },
    { name: "Categories", path: "/category" },
    { name: "Orders", path: "" },
    { name: "Reviews", path: "" },
    { name: "Branches", path: "" },
    { name: "Complaints", path: "" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white shadow-xl">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold tracking-wide">
            Admin Panel
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Management Dashboard
          </p>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.path)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition duration-200 font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 min-h-[90vh]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}