import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import logo from "./images/logo.svg";

const Sidebar = () => {
  const [productClick, setProductClick] = useState(false);
  const handleProduct = () => {
    setProductClick(!productClick);
  };
  return (
    <nav className="nav-header">
      <div>
        <img src={logo} alt="strapi" />
        <button onMouseOver={handleProduct} className="btn">
          Product
        </button>
        <button className="btn">developers</button>
        <button className="btn">company</button>
        <ul>{}</ul>
      </div>
    </nav>
  );
};

export default Sidebar;
