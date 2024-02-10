//import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Platform from "./components/Platform/Card";
import Header, { searchRef } from "./components/Header/Header";
import Sidbar from "./components/Sidebar/Sidbar";
import Table from "./components/Transactions/Table";

import { MyContext } from "./context/ThemeContext";

import { FiChevronsRight } from "react-icons/fi";
import { FiChevronsLeft } from "react-icons/fi";

import { ICard } from "./interfaces/interfaces";
import coin from "./assets/icon/coin.svg";
import cart from "./assets/icon/shopping-cart.svg";
import boxTick from "./assets/icon/box-tick.svg";
import rotate from "./assets/icon/3d-rotate.svg";
import { v4 as uuidv4 } from "uuid";
import Chart from "./components/Chart/Chart";
import { useState, useEffect, useRef } from "react";
import Loader from "./components/Modals/Loader";

function App() {
  const { Provider } = MyContext;
  const ref = useRef<searchRef>(null);
  const [toggleSidebar, setToggleSidebar] = useState("sidebar-hide");
  const [loader, setloader] = useState("page-loader");

  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme")
      ? (localStorage.getItem("theme") as string)
      : "light-mode"
  );
  const cards: ICard[] = [
    {
      icon: boxTick,
      type: "bull",
      value: "350",
      heading: "Total Order",
      profit: "23.5%",
    },

    {
      icon: rotate,
      type: "bear",
      value: "270",
      heading: "Total Refund",
      profit: "23.5%",
    },

    {
      icon: cart,
      type: "bear",
      value: "1567",
      heading: "Average Sales",
      profit: "23.5%",
    },
    {
      icon: coin,
      type: "bull",
      value: "$350.000",
      heading: "Total Income",
      profit: "23.5%",
    },
  ];

  const handleSidebarToggle = () => {
    if (toggleSidebar === "sidebar-show") {
      setToggleSidebar("sidebar-hide");
    } else {
      setToggleSidebar("sidebar-show");
    }
  };

  const handleChildren = () => {
    ref.current?.toggleNotification();
    ref.current?.toggleAccount();
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => setloader("no-page-loader"), 2000);
    } else {
      window.addEventListener("load", () => {
        console.log("loaded");
        setTimeout(() => setloader("no-page-loader"), 2000);
      });

      return () =>
        window.addEventListener("load", () => {
          console.log("loaded");
          setTimeout(() => setloader("no-page-loader"), 2000);
        });
    }
  }, []);
  return (
    <>
      <div onClick={handleChildren} className={theme}>
        <main className="main">
          <Provider value={{ theme, setTheme }}>
            <div className={`sidebar-wrapper ${toggleSidebar}`}>
              <Sidbar />
              <button onClick={handleSidebarToggle} className="toggle-sidebar">
                {toggleSidebar === "sidebar-hide" ? (
                  <FiChevronsRight className="right" />
                ) : (
                  <FiChevronsLeft className="left" />
                )}
              </button>
            </div>
          </Provider>
          <div className="main-body">
            <Header ref={ref} />
            <div className="main-content">
              <div className="main-left">
                <Chart />
              </div>
              <div className="main-right">
                <div className="card-area">
                  {cards.map((item, key) => (
                    <Card key={uuidv4() + key} details={item} />
                  ))}
                </div>
              </div>
              <div className="main-bottom-right">
                <div className="platforms">
                  <Platform />
                </div>
              </div>
              <div className="main-bottom-left">
                <Table />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className={loader}>
        <Loader />
      </div>
    </>
  );
}

export default App;
