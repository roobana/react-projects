import { useState } from "react";
import React from "react";

import App from "./App";
import Mycontext from "./context";

function Slider() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBarOpen, setIsBarOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleSideBar = () => {
    setIsBarOpen(!isBarOpen);
  };
  return (
    <Mycontext.Provider
      value={{ isOpen, isBarOpen, handleModal, handleSideBar }}
    >
      <App />
    </Mycontext.Provider>
  );
}

export default Slider;
