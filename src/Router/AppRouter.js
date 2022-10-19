import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../Components/Login/Login.js";
import BlogContainer from "../Components/BlogContainer/BlogContainer.js";
import BlogDetail from "../Components/BlogDetail/BlogDetail.js";
import AdminPage from "../Components/AdminPage/AdminPage.js";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
