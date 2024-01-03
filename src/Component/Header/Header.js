import React from "react";
import logo from "../../images/sheetal-enterprises-logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="Instant">
      <div className="Instant-header">
        <div className="Instant-content">
          <img src={logo} className="Instant-logo" alt="logo" />
          <p className="instant-header-text">
            SUPERVISORY CONTROL AND DATA ACQUISITION SYSTEM PERI URBAN
            UTTARAKAND
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
