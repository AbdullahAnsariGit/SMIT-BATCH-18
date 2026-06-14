import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./component/ErrorPage";
import Admin from "./screens/admin/Admin";
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import Home from "./screens/home";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>} /> */}
        <Route path="/admin" element={<ProtectedRoute children={<Admin />} />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
