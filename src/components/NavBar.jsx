import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link } from 'react-router-dom';
import HomeIcon from "../assets/home-icon.jpg";
const NavBar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 25) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "nav-header nav-header-bg" : "nav-header"}>
        <Link to={"/"}>
            <img src={HomeIcon} alt="" />
        </Link>
      <div className="user-icon">
        <Link to="/users"><button>Get Users Data</button></Link>
      </div>
    </div>
  );
};

export default NavBar;
