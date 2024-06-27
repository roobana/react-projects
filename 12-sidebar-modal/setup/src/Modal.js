import React, { useContext } from "react";
import Mycontext from "./context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const modalprops = useContext(Mycontext);
  const { isOpen, handleModal } = modalprops;
  // console.log("modalprops========", modalprops);
  return (
    <main>
      <div className="show-modal">
        <button onClick={handleModal}>SHOW MODAL</button>
      </div>
      {isOpen && (
        <div className="modal-container">
          <p>Model Content</p>
          <button onClick={handleModal}>
            <FaTimes />
          </button>
        </div>
      )}
    </main>
  );
};

export default Modal;
