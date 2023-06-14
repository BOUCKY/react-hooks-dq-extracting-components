import React from "react";
import { messages, contacts } from "../data";
import SideMenu from "./SideMenu";
import MainMenu from "./MainMenu";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <SideMenu />
      <MainMenu />
    </div>
  );
}

export default App;
