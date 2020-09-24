import React from "react";
import "./styles.css";
import ButtonEventHandle from "./components/ButtonEventHandle";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ButtonEventHandle />
      <EventBind />
      <ParentComponent />
    </div>
  );
}
