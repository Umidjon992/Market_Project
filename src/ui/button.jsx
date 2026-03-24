import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import "./style.css";

function HideOnScroll(props) {
  const trigger = useScrollTrigger({
    threshold: 300,
  });

  return (
    <Slide direction="up" in={trigger}>
      {props.children}
    </Slide>
  );
}

const ToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <HideOnScroll>
      <button className="toTopBtn" onClick={scrollTop}>
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
            d="m5 15 7-7 7 7"
          />
        </svg>
      </button>
    </HideOnScroll>
  );
};

export default ToTop;
