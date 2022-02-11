import React from "react";
import { MobileSearchBar } from "../../elements/form";
import UserInformation from "./userInformation";
export default function TopBar() {
  return (
    <ul className="navbar-nav ml-auto">
      {/* Nav Item - Search Dropdown (Visible Only XS) */}
      <li className="nav-item dropdown no-arrow">
        <div
          className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          aria-labelledby="searchDropdown"
        >
          {/* SEARCHABAR FOR DESKTOP VIEW */}
          <MobileSearchBar />
        </div>
      </li>
      <div className="topbar-divider d-none d-sm-block" />
      <UserInformation />
      {/* Nav Item - User Information */}
    </ul>
  );
}
