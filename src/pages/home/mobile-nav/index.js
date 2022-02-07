import React from "react";
import "./mobile-nav.css";
import { Link } from "react-router-dom";
import { alglogo } from "../../../assets/icons";

const MobileNav = ({ setMobileNav }) => {
  return (
    <section className="mobile_nav">
      <nav>
        <div className="logo">
          <div>
            <img src={alglogo} height={100} width={100} />
          </div>
          <div onClick={() => setMobileNav(false)} className="close">
            <i class="far fa-times-circle"></i>
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
                <button className="btn btn-primary">Launch App</button>
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
