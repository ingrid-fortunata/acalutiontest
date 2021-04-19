import React from "react";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../Assets/winedeliverybg.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();
  // console.log(location);
  let position = location.pathname.split("/")[1];

  return (
    <div className="navbar-container">
      <div className="navbar-burger-icon">
        {position === "productdetails" ? (
          <Link to="/" style={{ color: "white" }}>
            <AiOutlineArrowLeft />
          </Link>
        ) : (
          <GiHamburgerMenu style={{ color: "white" }} />
        )}
      </div>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="winedeliverylogo" />
        </Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search in WineDelivery"
          name="search"
          className="search-components-input"
          onChange={props.searchOnChange}
        />
        {/* <button type="submit" className="search-components-button">
          Search
        </button> */}
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
