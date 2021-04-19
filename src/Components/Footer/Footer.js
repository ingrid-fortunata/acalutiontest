import React from "react";
import "./Footer.css";
import logo from "../../Assets/winedeliverybg.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contain">
        <div>
          <h5>Contact Us</h5>
          <h6>Lorem ipsum, Singapore</h6>
          <h6>Open Daily By Appoinment</h6>
        </div>
        <div>
          <img src={logo} alt="winedelivery" />
        </div>
        <div>
          <h5>Connect with Us</h5>
          <h6>Phone : xxx-xxxx</h6>
          <h6>Email : xxx@gmail.com</h6>
        </div>
      </div>

      <div className="footer-copyright">
        <center>
          <h6> &#169; 2021 Wine Delivery </h6>
        </center>
      </div>
    </div>
  );
}
