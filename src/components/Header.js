import React from "react";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo"/>
      <div className="nav-bar">
        <span>Find Suppliers</span>
        <select>
            <option>Find Service Tags</option>
        </select>
        <button>
            Login / Sing Up
        </button>
      </div>
    </div>
  );
}

export default Header;
