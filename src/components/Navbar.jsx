import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [vegMode, setVegMode] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 onClick={() => navigate("/mainpage")} style={{ cursor: "pointer" }}>
        🍴 Culinary Suite
      </h1>
      <ul>
        <li onClick={() => navigate("/mainpage")}>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-right">
        <label className="switch">
          <input
            type="checkbox"
            checked={vegMode}
            onChange={() => setVegMode(!vegMode)}
          />
          <span className="slider"></span>
        </label>
        <span className="user" onClick={() => setShowDropdown(!showDropdown)}>
          👩‍🍳
        </span>
        {showDropdown && (
          <div className="dropdown">
            <p>Profile</p>
            <p>Settings</p>
            <p>Logout</p>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
