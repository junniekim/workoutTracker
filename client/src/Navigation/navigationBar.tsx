import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navigationBar.css";
const NavigationBar: React.FC = () => {
  const location = useLocation();
  return (
    <div className="navigation row">
      <div className="navHeader col-12 col-md-6">
        <h2 className="header">🔥Mooscles</h2>
      </div>
      <div className="navButtonHolder col-12 col-md-6">
        <Link
          to="/"
          className={`navButton ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/authenticate"
          className={`navButton ${
            location.pathname === "/authenticate" ? "active" : ""
          }`}
        >
          Authenticate
        </Link>
        <Link
          to="/profile"
          className={`navButton ${
            location.pathname === "/profile" ? "active" : ""
          }`}
        >
          Profile
        </Link>
        <Link
          to="/progress"
          className={`navButton ${
            location.pathname === "/progress" ? "active" : ""
          }`}
        >
          Progress
        </Link>
        <Link
          to="/workoutlist"
          className={`navButton ${
            location.pathname === "/workoutlist" ? "active" : ""
          }`}
        >
          List
        </Link>
        <Link
          to="/workoutlog"
          className={`navButton ${
            location.pathname === "/workoutlog" ? "active" : ""
          }`}
        >
          Log
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
