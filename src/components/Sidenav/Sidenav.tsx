import Searchbar from "../Header/Searchbar";

import { useContext } from "react";
import { SidnavContext } from "../../context/SidenavContext";
import { FiX } from "react-icons/fi";
import Calender from "../../assets/icon/calender.svg";
import Bell from "../../assets/icon/bell.svg";
import currentDate from "../../helper/FormatDate";
import ArrowDown from "../../assets/icon/Arrow - Down 2.svg";
import User from "../../assets/image/user.png";
import Thunder from "../../assets/icon/thunder.svg";

const Header = () => {
  const { sidenav, setSidenav, setoverlay } = useContext(SidnavContext);

  const handleSidenav = (val: string, overlayVal: string) => {
    setSidenav(val);
    setoverlay(overlayVal);
  };

  return (
    <div>
      <div className={`sidenav ${sidenav}`}>
        <div className="sidenav-top">
          <button
            onClick={() => handleSidenav("sidenav-hide", "overlay-hide")}
            className="header-hamburger"
          >
            <FiX className="hamburger" />
          </button>
          <div className="logo">
            <a href="/" className="logo-text">
              <img src={Thunder} alt="logo" />
            </a>
          </div>
        </div>
        <div className="sidenav-middle">
          <div className="header-notification">
            <div className="notification-icon-container">
              <button className="header-notification-btn">
                <img src={Bell} alt="notification icon" className="date-icon" />
              </button>
            </div>
          </div>
          <Searchbar />
        </div>
        <div className="sidenav-bottom">
          <div className="header-date">
            <div className="date-icon-container">
              <img src={Calender} alt="date icon" className="date-icon" />
            </div>
            <div className="date-container">{currentDate()}</div>
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
      </div>
    </div>
  );
};

export default Header;
