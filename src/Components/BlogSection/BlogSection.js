import React, { useEffect, useState } from "react";
import BlogItem from "../BlogItem/BlogItem.js";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalForm from "../ModalForm/ModalForm.js";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ha-blog02.herokuapp.com/api/post",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user && user.accessToken}`,
            },
          }
        );
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    };

    user && fetchData();
  }, [blogs]);

  const handleOnClose = (e) => {
    if (e.target.id === "container-modal") {
      setShowModal(false);
    }
  };

  return (
    <div className="mt-10 mb-[400px] w-full sm:px-14 px-10 flex flex-col justify-center">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-4xl mx-10 mt-6 mb-10 underline">Blog</h1>
        <p
          onClick={() => setShowModal(true)}
          className="text-xl font-medium p-2 text-white bg-cyan-600 rounded hover:scale-110 duration-300 cursor-pointer mr-4"
        >
          <FontAwesomeIcon icon={faPlus} className="px-1" />
          Add
        </p>
      </div>
      <div className="grid grid-col grid-cols-1 lg:grid-cols-4 gap-6 sm:grid-cols-3">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>

      {showModal && (
        <ModalForm
          onClose={(e) => handleOnClose(e)}
          header="Add new Blog"
          action="POST"
          id=""
        />
      )}
    </div>
  );
}
