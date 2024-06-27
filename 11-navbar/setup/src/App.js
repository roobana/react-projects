import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { links, social } from "./data";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>

        <ul className="social-icons">
          {social.map((socialItem) => {
            return (
              <li key={socialItem.id}>
                <a href={socialItem.url}>{socialItem.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default App;
