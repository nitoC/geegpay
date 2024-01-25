//import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Platform from "./components/Platform/Card";
import Header from "./components/Header/Header";
import Sidbar from "./components/Sidebar/Sidbar";
import Table from "./components/Transactions/Table";

import { MyContext } from "./context/ThemeContext";

import { ICard } from "./interfaces/interfaces";
import coin from "./assets/icon/coin.svg";
import cart from "./assets/icon/shopping-cart.svg";
import boxTick from "./assets/icon/box-tick.svg";
import rotate from "./assets/icon/3d-rotate.svg";
import { v4 as uuidv4 } from "uuid";
import Chart from "./assets/Chart";
import { useState } from "react";

function App() {
  const { Provider } = MyContext;
  const [theme, setTheme] = useState<string>("light-mode");
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
  return (
    <>
      <div className={theme}>
        <main className="main">
          <Provider value={{ theme, setTheme }}>
            <Sidbar />
          </Provider>
          <div className="main-body">
            <Header />
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
    </>
  );
}

export default App;
