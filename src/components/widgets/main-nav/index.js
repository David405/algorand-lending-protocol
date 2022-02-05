import React from "react";
import "./main-nav.css";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/images";
import { alglogo } from "../../../assets/icons";
const MainNav = ({ mobileNav, setMobileNav }) => {
  return (
    <section className="main-nav container">
      <div className="nav-container">
        <div>
          <img src={alglogo} height={100} width={100} />
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
              <button className="btn btn-outline-primary">Launch App</button>
            </li>
          </ul>
          <div className="app-icon" onClick={() => setMobileNav(true)}>
            <i class="fas fa-align-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNav;
