import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalForm = ({ onClose, header, action, id }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const savePost = () => {
    const token = JSON.parse(localStorage.getItem("user")).accessToken;
    const post = {
      title,
      body,
      imgUrl: "",
    };

    fetch(
      `https://ha-blog02.herokuapp.com/api/post/${action === "PUT" ? id : ""}`,
      {
        method: `${action}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    action === "PUT" && navigate("/");
  };

  return (
    <div
      id="container-modal"
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="sm:max-w-[600px] p-6 px-6 py-8 w-[90%] bg-white p-2 rounded flex flex-col justify-center items-center">
        <p className="text-cyan-800">{header}</p>

        <form
          onSubmit={title.trim() !== "" && body.trim() !== "" ? savePost : null}
          className="flex flex-col w-full"
        >
          {/* title */}
          <p className="my-2 text-xl">Title</p>
          <textarea
            className="border border-2xl border-gray-600 rounded mb-4 font-normal text-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* body */}
          <p className="my-2 text-xl">Body</p>
          <textarea
            className="border border-2xl border-gray-600 rounded mb-4 font-normal text-lg"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <input
            type="submit"
            value="Save"
            className="bg-cyan-600 rounded text-white p-2 my-2"
          />
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
