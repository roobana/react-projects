import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, data }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [data]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
