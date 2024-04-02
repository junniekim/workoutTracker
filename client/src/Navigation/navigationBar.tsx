import React from "react";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/authenticate">Authenticate</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/progress">Progress</Link>
      <Link to="/workoutlist">Workout List</Link>
      <Link to="/workoutlog">Workout Log</Link>
    </div>
  );
};

export default NavigationBar;
