import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navigationBar.css";
const NavigationBar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleWindowResize = () => {
      if (!mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleWindowResize);
    handleWindowResize();

    return () => {
      mediaQuery.removeEventListener("change", handleWindowResize);
    };
  }, []);
  return (
    <div className="navigation row">
      <div className="navHeader row col-12 col-md-6">
        <h2 className="header col-6" style={{ textWrap: "nowrap" }}>
          🔥Mooscles
        </h2>
        <div className="col-6">
          <button
            className="hamburger"
            style={{ background: "transparent", border: "none" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2>☰</h2>
          </button>
        </div>
      </div>
      <div className="navButtonHolder text-nowrap col-12 col-md-6">
        <Link
          to="/"
          className={`navButton ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/workoutlog"
          className={`navButton ${
            location.pathname === "/workoutlog" ? "active" : ""
          }`}
        >
          Tracker
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
          to="/profile"
          className={`navButton ${
            location.pathname === "/profile" ? "active" : ""
          }`}
        >
          Profile
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
          to="/authenticate"
          className={`navButton ${
            location.pathname === "/authenticate" ? "active" : ""
          }`}
        >
          Sign In
        </Link>
      </div>
      {isOpen && (
        <div className="collapsed-menu col-12 text-center">
          <Link
            to="/"
            className={`navButton ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/workoutlog"
            className={`navButton ${
              location.pathname === "/workoutlog" ? "active" : ""
            }`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Tracker
          </Link>
          <Link
            to="/progress"
            className={`navButton ${
              location.pathname === "/progress" ? "active" : ""
            }`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Progress
          </Link>
          <Link
            to="/profile"
            className={`navButton ${
              location.pathname === "/profile" ? "active" : ""
            }`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Profile
          </Link>
          <Link
            to="/workoutlist"
            className={`navButton ${
              location.pathname === "/workoutlist" ? "active" : ""
            }`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            List
          </Link>
          <Link
            to="/authenticate"
            className={`navButton ${
              location.pathname === "/authenticate" ? "active" : ""
            }`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
