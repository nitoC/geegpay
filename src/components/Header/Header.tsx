import Searchbar from "./Searchbar";

import Calender from "../../assets/icon/calender.svg";
import Bell from "../../assets/icon/bell.svg";
import currentDate from "../../helper/FormatDate";
import ArrowDown from "../../assets/icon/Arrow - Down 2.svg";
import User from "../../assets/image/user.png";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
