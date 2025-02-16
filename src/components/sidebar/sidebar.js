import React, { useState } from "react";
import { FaHome, FaUser, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import "./sidebar.css";
import logo from "../assets/logo.png"; // Update with the correct logo path

const Sidebar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="sidebar">
      {/* App Logo */}
      <div className="logo-container">
        <img src={logo} alt="App Logo" className="logo" />
      </div>

      {/* Menu Items (including Logout) */}
      <div className="menu">
        <button
          className={`menu-item ${active === "home" ? "active" : ""}`}
          onClick={() => setActive("home")}
        >
          <FaHome className="icon" />
          Home
        </button>

        <button
          className={`menu-item ${active === "interviews" ? "active" : ""}`}
          onClick={() => setActive("interviews")}
        >
          <FaClipboardList className="icon" />
          Interviews
        </button>

        <button
          className={`menu-item ${active === "profile" ? "active" : ""}`}
          onClick={() => setActive("profile")}
        >
          <FaUser className="icon" />
          Profile
        </button>

        {/* Logout Button Inside Menu */}
        <button
          className={`menu-item ${active === "logout" ? "active" : ""}`}
          onClick={() => console.log("Logging out...")}
        >
          <FaSignOutAlt className="icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
