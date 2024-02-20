"use client";
import React, { useContext } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/logo-white.png";
import { MyContext } from "../../context/MyContext";
import GridIcon from "./GridIcon";
import SettingIcon from "./SettingIcon";
import HeartIcon from "./HeartIcon";
function Navbar() {
  const { verticalLayout, setVerticalLayout } = useContext(MyContext);

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
            <HeartIcon width={24} height={24} />
          </button>
          <button className="bg-[#454858] hover:bg-[#454858] text-gray-50 font-normal py-2 px-4 rounded inline-flex items-center gap-2">
            <SettingIcon width={24} height={24} />
            <span>Settings</span>
          </button>
          {/* layout */}
          <button
            className="bg-[#454858] hover:bg-[#454858] py-2 px-4 rounded inline-flex items-center"
            onClick={toggleLayout}
          >
            <GridIcon width={24} height={24} />
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
