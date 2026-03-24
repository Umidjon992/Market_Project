import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Product", to: "/product" },
  { name: "Contact", to: "/contact" },
];

const Header = ({changeTheme}) => {
  return (
    <header className="Head">
      <div className="Logo">
        <Link
          to={"/"}
          className="link_logo"
          style={{ color: "black", textDecoration: "none" }}
        >
          <h1>
            <span style={{ color: "white", marginRight: "5px" }}>Nas</span>
            <span className="span">Express</span>
          </h1>
        </Link>
      </div>

      <ul className="nav">
        {navLinks.map((item) => (
          <li className="nav_li" key={item.to}>
            <Link to={item.to} className="link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="btns">
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button
            startIcon={
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 10 2 2-2 2M12 5v14M5 4h14c.5523 0 1 .4477 1 1v14c0 .5523-.4477 1-1 1H5c-.5523 0-1-.4477-1-1V5c0-.5523.4477-1 1-1Z"
                />
              </svg>
            }
          >
            Login
          </Button>

          <Button
            startIcon={
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
                />
              </svg>
            }
          >
            Register
          </Button>

          <Link to="/cart">
            <Button
              startIcon={
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
              }
            >
              Cart
            </Button>
          </Link>
          <Button
            startIcon={
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                />
              </svg>
            }
            onClick={changeTheme}
          >
            Dark Mode
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
};

export default Header;
