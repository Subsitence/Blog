import React, { useState } from "react";

import LoginForm from "../LoginForm/LoginForm.js";
import RegistrationForm from "../RegistrationForm/RegistrationForm.js";

import loginImg from "../../assets/img/login.jpeg";

export default function Login() {
  const [login, setLogin] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 mx-10 items-center">
        {login ? (
          <LoginForm stateChange={setLogin} />
        ) : (
          <RegistrationForm stateChange={setLogin} />
        )}

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={loginImg} alt="login" />
        </div>
      </div>
    </div>
  );
}
