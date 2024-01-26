import Searchbar from "./Searchbar";

import { SidnavContext } from "../../context/SidenavContext";
import { FiAlignRight } from "react-icons/fi";
import Calender from "../../assets/icon/calender.svg";
import Bell from "../../assets/icon/bell.svg";
import currentDate from "../../helper/FormatDate";
import ArrowDown from "../../assets/icon/Arrow - Down 2.svg";
import User from "../../assets/image/user.png";
import Sidenav from "../Sidenav/Sidenav";
import { useState } from "react";

const Header = () => {
  const { Provider } = SidnavContext;
  const [sidenav, setSidenav] = useState("sidenav-hide");
  const [overlay, setoverlay] = useState("overlay-hide");

  const handleSidenav = (val: string, overlayVal: string) => {
    setSidenav(val);
    setoverlay(overlayVal);
  };

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <div className="logo">
            <a href="/" className="logo-text">
              Dashboard
            </a>
          </div>
          <Searchbar />
        </div>
        <div className="header-right">
          <div className="header-date">
            <div className="date-icon-container">
              <img src={Calender} alt="date icon" className="date-icon" />
            </div>
            <div className="date-container">{currentDate()}</div>
          </div>
          <div className="header-notification">
            <div className="notification-icon-container">
              <button className="header-notification-btn">
                <img src={Bell} alt="notification icon" className="date-icon" />
              </button>
            </div>
          </div>
          <div className="header-user">
            <div className="header-user-avatar-container">
              <img src={User} alt="" className="header-avatar" />
            </div>
            <div className="header-user-text-container">
              <p className="header-username">Justin Bergson</p>
              <p className="header-email">Justin@gmail.com</p>
            </div>
            <div className="header-user-icon-container">
              <img src={ArrowDown} alt="" className="header-icon" />
            </div>
          </div>
        </div>
        <div className="header-harmburger-container">
          <button
            onClick={() => handleSidenav("sidenav-show", "overlay-show")}
            className="header-hamburger"
          >
            <FiAlignRight className="hamburger" />
          </button>
        </div>
      </div>
      <Provider value={{ sidenav, setSidenav, setoverlay }}>
        <div
          onClick={() => handleSidenav("sidenav-hide", "overlay-hide")}
          className={`overlay ${overlay}`}
        ></div>
        <Sidenav />
      </Provider>
    </div>
  );
};

export default Header;
