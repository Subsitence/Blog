import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";
import AdminSection from "../AdminSection/AdminSection.js";
import BlogSection from "../BlogSection/BlogSection.js";
import Footer from "../Footer/Footer.js";

export default function BlogContainer() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      navigate("/login");
    } else if (user.expiry < new Date().getTime()) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  }, []);

  return (
    <div
      className="text-3xl font-bold min-h-full relative
    flex flex-col"
    >
      <Header />
      <AdminSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
