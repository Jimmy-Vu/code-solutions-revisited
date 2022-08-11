import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


function AppDrawer(props) {
  const [isOpened, setIsOpened] = useState(false);

  function backgroundClick() {
    if (isOpened) {
      setIsOpened(false);
    }
  }
  function menuClick() {
    setIsOpened(true);
  }

  return (
    <div className="container">
      <section onClick={backgroundClick} className={isOpened ? "background_on" : ""}>
        <button>
          <i onClick={menuClick} className="fa-solid fa-bars"></i>
        </button>
      </section>
      <section className={`drawer-modal ${isOpened ? "" : "hidden"}`}>
        <nav>
          <h1>Choose a Game</h1>
          <ul>
            <li>
              <a href="https://www.planetside2.com/home" target="_blank">
                Planetside 2
              </a>
            </li>
            <li>
              <a href="https://www.overwatch.com" target="_blank">
                Overwatch
              </a>
            </li>
            <li>
              <a href="https://www.maplestory.com" target="_blank">
                Maple Story
              </a>
            </li>
            <li>
              <a href="https://www.leagueoflegends.com" target="_blank">
                League Of Legends
              </a></li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default AppDrawer;
