import { useContext, useState } from "react";
import { LOGO_CDN_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUserDetails} = useContext(UserContext);
  console.log('loggedInUserDetails', loggedInUserDetails)

  return (
    <div className="flex flex-col md:flex-row justify-between bg-pink-100 m-2 h-auto md:h-36 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container flex justify-center md:justify-start">
        <img
          className="w-32 md:w-56 h-24 md:h-36"
          src={LOGO_CDN_URL}
        />
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <ul className="flex flex-col md:flex-row p-2 md:p-4 m-2 md:m-4 space-y-2 md:space-y-0 md:space-x-4">
          <li className="px-4 md:px-8 flex items-center justify-center">
            <span className={onlineStatus ? "text-green-500" : "text-red-500"}>
            {onlineStatus ? "🟢" : "🔴"}
            </span>
            <span className="font-semibold ml-1">
            {onlineStatus ? "Online" : "Offline"}
            </span>
          </li>  
          <li className="px-4 md:px-8 text-center"> <Link to="/"> Home </Link></li>
          <li className="px-4 md:px-8 text-center"> <Link to="/about">About Us</Link></li>
          <li className="px-4 md:px-8 text-center"> <Link to="/contact">Contact Us</Link></li>
          <li className="px-4 md:px-8 text-center"> <Link to="/grocery">Grocery</Link></li>
          
          <li className="px-4 md:px-8 flex justify-center">
            <button className="px-4 bg-blue-500 h-10 text-white rounded-md" onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}>
              {btnName}
            </button>
          </li>
          <li className="px-4 md:px-8 text-center">
            <span className="font-semibold">{loggedInUserDetails?.name}</span>
            <p className="text-sm text-gray-600">{loggedInUserDetails?.email}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
