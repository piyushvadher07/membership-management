import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? <p>Welcome, {user.email}!</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Dashboard;
