import React from "react";
import "./logWise.css";
import { Link } from "react-router-dom";

function LogWise() {
  return (
    <div className="header">
    <div className="logWise-main-area">
      <div className="logWise">
        <form>
          <label for="division">Division :-</label>
          <select name="division" id="logwise-division">
            <option value="KAHRAKMAFF">KAHRAKMAFF</option>
            <option value="PRATITNAGAR">PRATITNAGAR</option>
            <option value="NATHUAWALA">NATHUAWALA</option>
          </select>
          <label for="birthday"></label>
          <input type="date" id="date" name="date" />
          <button class="submit">
            <span>SUBMIT </span>
          </button>
        </form>
      </div>
      <div className="logwise-btn-group">
        <Link to="/">
          <button>Instantaneous at a glance</button>
        </Link>
        <Link to="/second">
          <button>Instantaneous</button>
        </Link>
        <Link to="/first">
          <button>Zone wise pressure</button>
        </Link>
        <Link to="/four">
          <button>LogBook</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default LogWise;
