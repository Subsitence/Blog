import React, { useState } from "react";

export default function RegistrationForm({ stateChange, ...rest }) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const regist = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
      name,
    };

    fetch("https://ha-blog02.herokuapp.com/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 500) {
          setInvalid(true);
          throw new Error("username has already been used");
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message);
        stateChange(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="md:w-1/2 px-16">
      <h1 className="font-bold text-2xl text-[#002D74]">Sign Up</h1>
      <p className="mt-4 text-sm">
        If you not already a member, create an account
      </p>

      {invalid && (
        <p className="mt-10 text-[#E0301E] text-sm">
          The username has already been used!
        </p>
      )}

      <form className="flex flex-col mt-4" onSubmit={(e) => regist(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 my-2 rounded border border-1 border-gray-400"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

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
          Sign Up
        </button>
      </form>

      <div className="mt-10 text-xs flex justify-between items-center">
        <p>Already have an account?</p>
        <button
          className="py-2 px-5 bg-white border border-gray-400 rounded-2xl hover:scale-105 duration-300"
          onClick={() => stateChange(true)}
        >
          Login
        </button>
      </div>
    </div>
  );
}
