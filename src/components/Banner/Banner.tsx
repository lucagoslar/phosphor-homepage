import React from "react";
import { Medal } from "phosphor-react"; 

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
       The 2022 Figma Community Awards are here!
      <button
        className="main-button"
        onClick={
            () => window.open(
              "https://www.figma.com/community/file/903830135544202908",
              "_blank",
              "noopener noreferrer",
            )
        }>
          <Medal size={24} weight="fill" />
          Vote for Phosphor
        </button>
    </div>
  );
};

export default Banner;