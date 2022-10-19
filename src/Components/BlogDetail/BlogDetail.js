import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Blog from "../Blog/Blog.js";

export default function BlogDetail(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { state } = useLocation();

  return (
    <div className="text-3xl font-bold min-h-screen relative">
      <Header />
      <Blog blog={state} />
      <Footer />
    </div>
  );
}
