import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ stateChange, ...rest }) {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const login = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${username}` + ":" + `${password}`)}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          setInvalid(true);
          throw new Error("Unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        let user = {
          ...data,
          expiry: new Date().getTime() + 1000 * 60 * 60,
        };
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="md:w-1/2 px-16">
      <h1 className="font-bold text-2xl text-[#002D74]">Login</h1>
      <p className="mt-4 text-sm">If you already a member, easily login</p>

      {invalid && (
        <p className="mt-10 text-[#E0301E] text-sm">
          You have entered an invalid username or password!
        </p>
      )}

      <form className="flex flex-col mt-4" onSubmit={(e) => login(e)}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="p-2 my-4 rounded border border-1 border-gray-400"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 mt-2 mb-8 rounded border border-1 border-gray-400"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button
          type="submit"
          className="bg-[#002D74] rounded-2xl text-white py-2 hover:scale-105 duration-300"
        >
          Login
        </button>
      </form>

      <p className="mt-5 text-xs border-b border-gray-400 py-4">
        Forgot your password?
      </p>

      <div className="mt-3 text-xs flex justify-between items-center">
        <p>Don't have an account?</p>
        <button
          className="py-2 px-5 bg-white border border-gray-400 rounded-2xl hover:scale-105 duration-300"
          onClick={() => stateChange(false)}
        >
          Register
        </button>
      </div>
    </div>
  );
}
