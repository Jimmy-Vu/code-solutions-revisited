import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


function AppDrawer(props) {
  const [isOpened, setIsOpened] = useState(false);

  function containerClick() {
    if (isOpened) {
      setIsOpened(false);
    }
  }
  function menuClick() {
      setIsOpened(true);
  }

  return (
    <div onClick={containerClick} className="container">
      <i onClick={menuClick} className="fa-solid fa-bars"></i>
      <section className={`drawer-modal ${isOpened ? "" : "hidden"}`}>
        <h1>Choose a Game</h1>
      </section>
    </div>
  );
}

export default AppDrawer;
