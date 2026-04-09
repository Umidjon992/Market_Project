import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-wrapper">
      <h1 className="error-title">404</h1>
      <p className="error-text">Page Not Found</p>
      <Link className="error-btn" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
