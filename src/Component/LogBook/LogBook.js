import React from "react";
import "./LogBook.css";
import { Link } from "react-router-dom";

function LogBook() {
  return (

    <div className="LogBook-header">
    <div className="main-area">
      <div className="logBook">
        <form>
          <label for="division">Division </label>
          <select name="division" id="division">
            <option value="KAHRAKMAFF">KAHRAKMAFF</option>
            <option value="PRATITNAGAR">PRATITNAGAR</option>
            <option value="NATHUAWALA">NATHUAWALA</option>
          </select>
          <div className="station">
            <label for="station">Station :-</label>
            <select id="station">
              <option value="KAHRAKMAFF">KAHRAKMAFF</option>
              <option value="PRATITNAGAR">PRATITNAGAR</option>
              <option value="NATHUAWALA">NATHUAWALA</option>
            </select>
          </div>
          <div className="from-date">
            <label for="birthday">From:</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="to-date">
            <label for="birthday">To:</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="Tubewell">
            <select name="Tubewell">
              <option value="KAHRAKMAFF">Tubewell</option>
              <option value="PRATITNAGAR">PRATITNAGAR</option>
            </select>
          </div>
          <div className="hourly">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Hourly</label>
          </div>
          <div className="logBook-btn-group">
            <button>SUBMIT</button>
            <button>Export to Excel</button>
            <Link to="/"><button>Instantaneous at a glance</button></Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default LogBook;
