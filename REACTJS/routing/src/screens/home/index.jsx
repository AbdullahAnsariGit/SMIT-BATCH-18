import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">
            MyWebsite
          </h1>

          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-indigo-600 transition"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="text-gray-700 font-medium hover:text-indigo-600 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="text-gray-700 font-medium hover:text-indigo-600 transition"
            >
              signup
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
          Welcome Home 👋
        </h1>

        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          Build beautiful React applications with modern UI components and
          Tailwind CSS. Fast, responsive, and easy to customize.
        </p>

        <div className="flex gap-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition"
          >
            Learn More
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-xl hover:bg-indigo-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Fast
            </h3>
            <p className="text-gray-600">
              Optimized performance with React and Tailwind CSS.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Responsive
            </h3>
            <p className="text-gray-600">
              Looks great on desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Modern
            </h3>
            <p className="text-gray-600">
              Clean design with smooth hover effects and gradients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;