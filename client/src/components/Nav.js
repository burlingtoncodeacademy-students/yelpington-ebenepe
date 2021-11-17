import React from "react";
import { Link } from "react-router-dom"

function Nav() {
  // nav panel
  return (
    <div id="nav-panel">
      {/* logo auto-generated from brandcrowd.com */}
      <img src='/src/images/yelpington.png' alt="Yelpington Logo"/>
      {/* list of links directed to paths defined in router section of App.js */}
      <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
        <li>
          <Link to="/restaurant/bluebird-barbeque">Bluebird Barbeque</Link>
        </li>
        <li>
          <Link to="/restaurant/henry-st-deli">Henry St. Deli</Link>
        </li>
        <li>
          <Link to="/restaurant/kismayo">Kismayo Kitchen</Link>
        </li>
        <li>
          <Link to="/restaurant/pho-hong">Pho Hong</Link>
        </li>
        <li>
          <Link to="/restaurant/poppy-cafe">Poppy Cafe</Link>
        </li>
        <li>
          <Link to="/restaurant/saigon-kitchen">Saigon Kitchen</Link>
        </li>
        <li>
          <Link to="/restaurant/shinjuku-station">Shinjuku Station</Link>
        </li>
        <li>
          <Link to="/restaurant/taco-gordo">Taco Gordo</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;