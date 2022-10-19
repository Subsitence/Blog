import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import UserContainer from "../UserContainer/UserContainer.js";

const AdminPage = () => {
  return (
    <div className="text-3xl font-bold min-h-screen relative">
      <Header />
      <UserContainer />
      <Footer />
    </div>
  );
};

export default AdminPage;
