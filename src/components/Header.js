import { useState } from "react";
import { LOGO_CDN_URL } from "../utils/constant";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_CDN_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/"> Home </Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/contact">Contact Us</Link></li>
          <button className="login-btn" onClick={() => {
            setBtnName(btnName === "Login" ? "Logout" : "Login");
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
