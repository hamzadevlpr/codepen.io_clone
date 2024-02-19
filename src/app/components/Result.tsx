"use client";
import React from "react";

function Compile({ srcCode }: { srcCode: string }) {
  return (
    <>
        <iframe
          srcDoc={srcCode}
          title="output"
          sandbox="allow-scripts"
          width="100vw"
          height="100%"
        ></iframe>
    </>
  );
}

export default Compile;
