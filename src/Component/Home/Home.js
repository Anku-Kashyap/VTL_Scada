import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const handleClick = () => {
    window.open("http://59.99.154.95:3050/Reports/browse/JAL_SANSTHAN_REPORTS");
  };
  return (
    <>
      <div className="">
        <div className="Home-home-btn-group">
          <Link to="/second">
            <button>Instantaneous</button>
          </Link>
          <Link to="/first">
            <button>Zone wise pressure</button>
          </Link>
        </div>
      </div>
      <div className="Footer">
        <p className="Footer-text">
          Design And Devlop By - Shetal Enterprises 18 Cross 2B Tapovan Enclave
          Raipur Road, Dehradun.
        </p>
      </div>
    </>
  );
}

export default Home;
