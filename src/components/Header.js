import { useState } from "react";
import { LOGO_CDN_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 m-2 h-36 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img
          className="w-56 h-36"
          src={LOGO_CDN_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-8 flex">
            <span className={onlineStatus ? "text-green-500" : "text-red-500"}>
            {onlineStatus ? "🟢" : "🔴"}
            </span>
            <span className="font-semibold">
            {onlineStatus ? "Online" : "Offline"}
            </span>
          </li>  
          <li className="px-8"> <Link to="/"> Home </Link></li>
          <li className="px-8"> <Link to="/about">About Us</Link></li>
          <li className="px-8"> <Link to="/contact">Contact Us</Link></li>
          <li className="px-8"> <Link to="/grocery">Grocery</Link></li>
          
          <button className="px-4 bg-blue-500 h-10 text-white rounded-md" onClick={() => {
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
