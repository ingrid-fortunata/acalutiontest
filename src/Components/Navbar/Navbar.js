import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../Assets/winedeliverybg.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-burger-icon">
        <GiHamburgerMenu />
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="winedeliverylogo" />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search in WineDelivery"
          name="search"
          className="search-components-input"
        />
        <button type="submit" className="search-components-button">
          Search
        </button>
      </div>
      <div className="navbar-signup">
        <a href="#signup">Sign Up</a>
      </div>
      <div className="navbar-signup">
        <a href="#signin">Sign In</a>
      </div>
      <div className="navbar-shopping">
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
