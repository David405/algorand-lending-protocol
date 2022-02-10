import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/images";
import "./mobile-nav.css";

const MobileNav = ({ setMobileNav }) => {
  return (
    <section className="mobile_nav">
      <nav>
        <div className="logo">
          <div>
            <img src={logo} height={100} width={100} />
          </div>
          <div onClick={() => setMobileNav(false)} className="close">
            <i className="far fa-times-circle"></i>
          </div>
        </div>
        <div>
          <ul className="">
            <li className="list">
              <Link to="/">Home</Link>
            </li>
            <li className="list">
              <Link to="/">Network</Link>
            </li>
            <li className="list">
              <Link to="/">Docs</Link>
            </li>
            <li className="ml-1 mt-2">
              <div>
              <Link className="btn btn-primary button" to={'/dashboard'} target="_blank">Launch App </Link>
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    </section>
  );
};

export default MobileNav;
