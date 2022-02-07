import React from "react";
import "./list-item.css";
const ListItem = ({ children }) => {
  return <li className="list-item">{children || "Welcome to List"}</li>;
};

export default ListItem;
