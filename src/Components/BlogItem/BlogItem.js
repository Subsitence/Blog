import React from "react";
import { useNavigate } from "react-router-dom";

import cardImg from "../../assets/img/cardImg.jpg";
import defaultAva from "../../assets/img/defaultAva.jpg";

export default function BlogItem(props) {
  const navigate = useNavigate();
  const detail = () => {
    navigate("/blog-detail", {
      state: {
        ...props.blog,
      },
    });
  };

  return (
    <div
      onClick={detail}
      className="p-4 flex flex-col shadow-lg bg-gray-100 border border-1 border-gray-100 rounded hover:scale-105 duration-300 cursor-pointer"
    >
      <img src={cardImg} alt="blog" className="rounded-md" />
      <div className="min-h-[164px]">
        <div className="min-h-[80px]">
          <p className="text-xl pt-2 pb-1 ml-1">{props.blog.title}</p>
          <p className="truncate font-normal text-sm ml-1">{props.blog.body}</p>
        </div>

        <div className="flex flex-row items-center mt-6">
          <img
            src={defaultAva}
            alt="avatar"
            className="w-6 rounded-full mr-2"
          />
          <p className="text-sm">{props.blog.name}</p>
        </div>
        <p className="text-[10px] text-gray-500 ml-2">
          {new Date(props.blog.timestamp).toDateString()}
        </p>
      </div>
    </div>
  );
}
