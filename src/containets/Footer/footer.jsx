import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Product", to: "/product" },
  { name: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        textAlign: "center",
        background: "#0d47a1",
        color: "white",
        marginTop: "40px",
      }}
    >
      <h3 style={{ margin: 0, fontWeight: "600" }}>NasExpress</h3>
      <p style={{ margin: "5px 0 0", fontSize: "14px", opacity: 0.9 }}>
        © {new Date().getFullYear()} NasExpress. All rights reserved.
      </p>
      <ul className="nav_foot">
        {navLinks.map((item) => (
          <li className="nav_li" key={item.to}>
            <Link to={item.to} className="link_foot">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
