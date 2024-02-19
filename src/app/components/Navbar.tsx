'use client'
import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/logo-white.png";
import { MyContext } from "./MyContext";
function Navbar() {
  const {verticalLayout, setVerticalLayout} = useContext(MyContext);

  const toggleLayout = () => {
    setVerticalLayout(!verticalLayout);
  };
  return (
    <>
      <div className="bg-[#010101] flex md:justify-between justify-center flex-wrap gap-5 py-2">
        <div className="gap-2 flex justify-start items-center">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={50}
            className="w-10 h-10"
          />
          <div>
            <p className="text-white text-xl">Codepen.io</p>
            <p className="text-gray-400">The front end playground</p>
          </div>
        </div>
        <div className="gap-2 flex justify-end items-center">
          <button className="bg-[#454858] hover:bg-[#454858] text-gray-50 py-2 px-4 rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </button>
          <button className="bg-[#454858] hover:bg-[#454858] text-gray-50 font-normal py-2 px-4 rounded inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                clipRule="evenodd"
              />
            </svg>

            <span>Settings</span>
          </button>
          {/* layout */}
          <button className="bg-[#454858] hover:bg-[#454858] py-2 px-4 rounded inline-flex items-center" onClick={toggleLayout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              id="grid"
              className="w-6 h-6"
            >
              <path
                d="M20 36h10V24H20v12zM8 36h10V10H8v26zm24 0h10V24H32v12zM20 10v12h22V10H20z"
                fill="#ffffff"
                className="color000000 svgShape"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
          </button>
          {/* signup button */}
          <button className="bg-[#34ae5b] hover:bg-[#48cf73] w-24 justify-center text-gray-900 font-normal py-2 px-4 rounded inline-flex items-center">
            <span>Sign up</span>
          </button>

          {/* login button */}
          <button className="bg-[#454858] hover:bg-[#454858] w-24 justify-center text-gray-50 font-normal py-2 px-4 rounded inline-flex items-center">
            <span>Login</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
