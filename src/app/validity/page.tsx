"use client"

// pages/invalid-users.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const InvalidUsersPage: React.FC = () => {
  const [invalidUsers, setInvalidUsers] = useState<any[]>([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch invalid users
    axios
      .get("/api/verify") // Adjust the URL as needed
      .then((response) => {
        setInvalidUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching invalid users:", error);
      });
  }, []);

  return (
    <div>
      <h1>Invalid Users</h1>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Profit Loss</th>
            <th>Description</th>
            <th>Time</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {invalidUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.teamName}</td>
              <td>{user.profitLoss}</td>
              <td>{user.description}</td>
              <td>{user.createdAt}</td>
              <td>
                {user.imageLink && <img src={user.imageLink} alt={user.teamName} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvalidUsersPage;
