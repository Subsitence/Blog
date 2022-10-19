import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-900 text-white py-4 w-full bottom-0 relative">
      <p className="mb-6 text-cyan-300">Contact</p>
      <ul className="flex flex-col sm:flex-row mb-10 sm:gap-10 justify-center sm:w-full font-normal text-xl">
        <li className="p-2 hover:scale-110 my-2 duration-300 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/h%E1%BA%A3i-anh-%C4%91%E1%BB%97-656a40233/"
            className=""
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="px-2 text-2xl" />
            LinkedIn
          </a>
        </li>
        <li className="p-2 hover:scale-110 my-2 duration-300 cursor-pointer">
          <a href="https://www.facebook.com/dha190320022">
            <FontAwesomeIcon icon={faFacebookF} className="px-2 text-2xl" />
            Facebook
          </a>
        </li>
        <li className="p-2 hover:scale-110 my-2 duration-300 cursor-pointer">
          <a href="https://www.instagram.com/haianhzz/">
            <FontAwesomeIcon icon={faInstagram} className="px-2 text-2xl" />
            Instagram
          </a>
        </li>
        <li className="p-2 hover:scale-110 my-2 duration-300 cursor-pointer">
          <a href="https://www.tiktok.com/@po0pinboiz?lang=vi-VN">
            <FontAwesomeIcon icon={faTiktok} className="px-2 text-2xl" />
            TikTok
          </a>
        </li>
      </ul>
    </footer>
  );
}
