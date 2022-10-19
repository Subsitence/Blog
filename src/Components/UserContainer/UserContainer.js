import React, { useEffect, useState } from "react";

const UserContainer = () => {
  const [userInfos, setUserInfos] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ha-blog02.herokuapp.com/api/user",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user && user.accessToken}`,
            },
          }
        );
        const data = await response.json();
        setUserInfos(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full sm:p-6 p-2 mt-40 min-h-[700px] mb-10">
      <div className="overflow-auto w-full bg-gray-200 rounded-2xl p-4 sm:p-6 min-h-[600px] shadow-xl">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="md:w-20 w-2 p-3 text-xs md:text-sm font-semibold tracking-wide text-left">
                ID
              </th>
              <th className="p-3 md:w-24 w-2 text-xs md:text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="md:w-24 w-2 p-3 text-xs md:text-sm font-semibold tracking-wide text-left">
                UserName
              </th>
              <th className="md:w-24 w-2 p-3 text-xs md:text-sm font-semibold tracking-wide text-left">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {userInfos.map((userInfo) => {
              return (
                <tr className="bg-white" key={userInfo.id}>
                  <td className="p-3 md:text-sm text-xs text-gray-700 whitespace-nowrap">
                    <p className="font-bold text-blue-500 hover:underline">
                      {userInfo.id}
                    </p>
                  </td>
                  <td className="text-clip p-3 md:text-sm text-xs text-gray-700 whitespace-nowrap">
                    {userInfo.name}
                  </td>
                  <td className="p-3 md:text-sm text-xs text-gray-700 whitespace-nowrap">
                    {userInfo.username}
                  </td>
                  <td className="p-3 md:text-sm text-xs text-gray-700 whitespace-nowrap">
                    <span className="p-1.5 font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      {userInfo.role}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserContainer;
