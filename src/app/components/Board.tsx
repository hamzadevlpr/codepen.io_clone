"use client";

import React, { useCallback, useContext, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import Result from "@/app/components/Result";
import { MyContext } from "../context/MyContext";
import SettingIcon from "./icons/SettingIcon";
import DownIcon from "./icons/DownIcon";
import HTMLIcon from "./icons/HTMLIcon";
import CSSIcon from "./icons/CSSIcon";
import JSIcon from "./icons/JSIcon";

function Board() {
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");
  const [activeTab, setActiveTab] = useState("html");

  const { verticalLayout, setVerticalLayout } = useContext(MyContext);

  const onChangeHtml = useCallback((value: any) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value: any) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value: any) => {
    setJs_Edit(value);
  }, []);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const srcCode = `
  <html>
  <style>${css_edit}</style>
  <body>${html_edit}
  <script>${js_edit}</script>
  </body>
  </html>
  `;
  return (
    <>
      <div
        className={`grid ${
          verticalLayout ? "sm:grid-cols-12" : "sm:grid-cols-1"
        }`}
      >
        <div
          className={`grid ${
            verticalLayout ? "grid-cols-1 " : "sm:grid-cols-3"
          } gap-4 bg-black pb-4 border border-gray-700 col-span-3`}
        >
          {/* Html Editor */}
          <div
            className={`col-span-1 ${
              activeTab !== "html" ? "hidden sm:block" : ""
            }`}
          >
            <div className="flex justify-between">
              <button
                className={`bg-[#1d1e23] w-24 flex items-center p-1 gap-2 ${
                  activeTab ? "border-t-4 border-gray-500" : ""
                }`}
                onClick={() => handleTabChange("html")}
              >
                <HTMLIcon width={24} height={24} />
                <span className="text-gray-300 font-bold">HTML</span>
              </button>

              <div className="flex items-center gap-1 text-gray-100 mr-5">
                <button className="px-2 bg-[#454857] h-5">
                  <SettingIcon width={12} height={12} />
                </button>

                <button className="px-2 bg-[#454857] h-5">
                  <DownIcon width={12} height={12} />
                </button>
              </div>
            </div>
            <CodeMirror
              value={html_edit}
              height="400px"
              theme="dark"
              extensions={[html()]}
              onChange={onChangeHtml}
            />
          </div>

          {/* Css Editor  */}
          <div
            className={`col-span-1 ${
              activeTab !== "css" ? "hidden sm:block" : ""
            }`}
          >
            <div className="flex justify-between">
              <button
                className="bg-[#1d1e23] w-24 flex items-center p-1 gap-2 border-t-4 border-gray-500"
                onClick={() => handleTabChange("js")}
              >
                <CSSIcon width={20} height={20} />
                <span className="text-gray-300 font-bold">CSS</span>
              </button>
              <div className="flex items-center gap-1 text-gray-100 mr-5">
                <button className="px-2 bg-[#454857] h-5">
                  <SettingIcon width={12} height={12} />
                </button>

                <button className="px-2 bg-[#454857] h-5">
                  <DownIcon width={12} height={12} />
                </button>
              </div>
            </div>
            <CodeMirror
              value={css_edit}
              height="400px"
              theme="dark"
              extensions={[css()]}
              onChange={onChangeCss}
            />
          </div>

          {/* JavaScript Editor  */}
          <div
            className={`col-span-1 ${
              activeTab !== "js" ? "hidden sm:block" : ""
            }`}
          >
            <div className="flex justify-between">
              <button
                className="bg-[#1d1e23] w-24 flex items-center p-1 gap-2 border-t-4 border-gray-500"
                onClick={() => handleTabChange("htm")}
              >
                <JSIcon width={20} height={20} />

                <span className="text-gray-300 font-bold">JS</span>
              </button>
              <div className="flex items-center gap-1 text-gray-100 mr-5">
                <button className="px-2 bg-[#454857] h-5">
                  <SettingIcon width={12} height={12} />
                </button>

                <button className="px-2 bg-[#454857] h-5">
                  <DownIcon width={12} height={12} />
                </button>
              </div>
            </div>
            <CodeMirror
              value={js_edit}
              height="400px"
              theme="dark"
              extensions={[javascript()]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>
        {/* Result component on the left */}
        <div className={`h-[400px] border-2 ${verticalLayout ? "col-span-9 h-screen" : ""}`}>
          <Result srcCode={srcCode} />
        </div>
      </div>
    </>
  );
}

export default Board;
