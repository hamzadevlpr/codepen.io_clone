"use client";
import React, { createContext, useState } from "react";
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [verticalLayout, setVerticalLayout] = useState(false);
  return (
    <MyContext.Provider
      value={{
        verticalLayout,
        setVerticalLayout,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
