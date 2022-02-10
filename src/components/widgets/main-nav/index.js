import React from "react";
import "./main-nav.css";
import { Link } from "react-router-dom";
import { logo, logo_icon } from "../../../assets/images";
import { alglogo } from "../../../assets/icons";
const MainNav = ({ mobileNav, setMobileNav }) => {
  return (
    <section className="main-nav container">
      <div className="nav-container">
        <div>
       
         <span className="negative-ml">a</span>
        </div>
        <div>
          <ul className="nav-lists">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Network</Link>
            </li>
            <li>
              <Link to="/">Docs</Link>
            </li>
            <li>
            <Link className="btn btn-primary button" to={'/dashboard'} target="_blank">Launch App </Link>
            </li>
          </ul>
          <div className="app-icon" onClick={() => setMobileNav(true)}>
            <i className="fas fa-align-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNav;
