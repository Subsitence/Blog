import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toAdminPage = () => {
    navigate("/admin");
  };

  const homePage = () => {
    navigate("/");
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          onClick={homePage}
          className="text-3xl cursor-pointer flex items-center p-3 rounded-xl bg-cyan-600 text-white"
        >
          DHA's Blog
        </div>
        <div
          onClick={() => setOpenModal(!openModal)}
          className="text-xl sm:flex items-center cursor-pointer text-gray-800 p-4 hover:scale-110 duration-300"
        >
          <span className="sm:text-lg text-2xl px-2 text-gray-800">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <p className="sm:block hidden">{user && user.username}</p>
        </div>
        <div
          className={`flex flex-col text-center right-0 sm:right-6 z-[-1] absolute w-full sm:w-36 items-center flex justify-center bg-white shadow-lg transition-all duration-300 ease-in ${
            openModal ? "top-full opacity-100" : "top-0 opacity-0"
          }`}
        >
          {user && user.role === "ADMIN" && (
            <p
              onClick={toAdminPage}
              className="w-full cursor-pointer hover:bg-gray-100 font-semibold text-lg p-2 border-b-2 border-gray-300"
            >
              User
            </p>
          )}
          <p
            onClick={() => logout()}
            className="w-full cursor-pointer hover:bg-gray-100 font-semibold text-lg p-2"
          >
            Log out
          </p>
        </div>
      </div>
    </div>
  );
}
