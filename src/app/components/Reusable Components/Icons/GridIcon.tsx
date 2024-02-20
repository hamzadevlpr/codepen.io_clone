import React from "react";

const GridIcon = ({
  width = 24,
  height = 24,
  color = "#ffffff",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={width}
    height={height}
    className={className}
  >
    <path
      d="M20 36h10V24H20v12zM8 36h10V10H8v26zm24 0h10V24H32v12zM20 10v12h22V10H20z"
      fill={color}
    />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
);

export default GridIcon;
