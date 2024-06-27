import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import Mycontext from "./context";

const Sidebar = () => {
  const slideProps = useContext(Mycontext);
  const { isBarOpen } = slideProps;
  return (
    <div>
      {isBarOpen && (
        <div>
          <div>
            <img className="logo" src={logo} alt={logo} />
          </div>
          <div>
            {links.map((linkval) => {
              const { id, url, icon, text } = linkval;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                  {icon}
                </li>
              );
            })}
          </div>
          <div>
            {social.map((app) => {
              const { id, url, icon } = app;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
