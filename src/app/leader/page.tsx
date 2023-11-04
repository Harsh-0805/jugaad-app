// pages/index.tsx
"use client"
import React, { useEffect, useState } from "react";

const IndexPage: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("/api/leaderboard") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setLeaderboardData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  leaderboardData.sort((a, b) => b.maxTotalMoney - a.maxTotalMoney);

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Total Money</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((team, index) => (
            <tr key={team.teamName}>
              <td>{index + 1}</td>
              <td>{team.teamName}</td>
              <td>{team.maxTotalMoney}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndexPage;
