import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import defaultAva from "../../assets/img/defaultAva.jpg";
import ModalForm from "../ModalForm/ModalForm";

const Blog = ({ blog }) => {
  const [openOption, setOpenOption] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    const token = JSON.parse(localStorage.getItem("user")).accessToken;

    fetch(`https://ha-blog02.herokuapp.com/api/post/${blog.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(data.message);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container-modal") {
      setShowModal(false);
    }
  };

  return (
    <div className="w-full p-6 mt-40 min-h-[700px] mb-10">
      <div className="w-full bg-gray-200 rounded-2xl p-6 min-h-[600px] shadow-xl">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <img
              src={defaultAva}
              alt="avatar"
              className="w-10 rounded-full mr-2"
            />
            <p className="text-lg">{blog && blog.name}</p>
          </div>

          {/* option */}
          <span
            onClick={() => setOpenOption(!openOption)}
            className="cursor-pointer hover:scale-110 duration-300 px-4 z-10"
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </span>

          <div
            className={`flex text-center flex-col sm:mr-6 justify-center right-8 sm:right-6 z-0 cursor-pointer absolute w-24 sm:w-36 items-center flex justify-center bg-white shadow-lg transition-all duration-300 ease-in ${
              openOption ? "top-20 opacity-100" : "top-10 opacity-0"
            }`}
          >
            <p
              onClick={() => setShowModal(true)}
              className="font-semibold text-base  text-lg p-2 hover:bg-gray-300 w-full border-b-2 border-gray-300"
            >
              Edit
            </p>
            <p
              onClick={handleDelete}
              className="font-semibold text-base  text-lg p-2 hover:bg-gray-300 w-full"
            >
              Delete
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-500 ml-10">
          {blog && new Date(blog.timestamp).toDateString()}
        </p>

        <div className="mt-8 px-8">
          <p className="mb-4">{blog && blog.title}</p>
          <p className="font-normal text-lg">{blog && blog.body}</p>
        </div>
      </div>
      {showModal && (
        <ModalForm
          onClose={(e) => handleOnClose(e)}
          header="Update Blog"
          action="PUT"
          id={blog.id}
        />
      )}
    </div>
  );
};

export default Blog;
