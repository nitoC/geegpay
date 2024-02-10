import Searchbar from "./Searchbar";

import Bellslight from "../../assets/icon/belllight.svg";
import Calenderlight from "../../assets/icon/calenderlight.svg";
import { SidnavContext } from "../../context/SidenavContext";
import { FiAlignRight } from "react-icons/fi";
import Calender from "../../assets/icon/calender.svg";
import Bell from "../../assets/icon/bell.svg";
import currentDate from "../../helper/FormatDate";
import ArrowDown from "../../assets/icon/Arrow - Down 2.svg";
import User from "../../assets/image/user.png";
import Sidenav from "../Sidenav/Sidenav";
import { useState, useImperativeHandle, forwardRef, Ref } from "react";
import Profile from "../Modals/Profile";
import Notifications from "../Modals/Notifications";

interface searchProps {}
export type searchRef = {
  toggleAccount: () => void;
  toggleNotification: () => void;
};

const Header = (props: searchProps, ref: Ref<searchRef>) => {
  const { Provider } = SidnavContext;
  const [sidenav, setSidenav] = useState("sidenav-hide");
  const [overlay, setoverlay] = useState("overlay-hide");
  const [profileClass, setprofileClass] = useState("profile-hide");
  const [notificationToggle, setnotificationToggle] =
    useState("notification-hide");
  const BellIcon =
    localStorage.getItem("theme") == "light-mode" ? Bell : Bellslight;
  const CalenderIcon =
    localStorage.getItem("theme") == "light-mode" ? Calender : Calenderlight;

  const handleSidenav = (val: string, overlayVal: string) => {
    setSidenav(val);
    setoverlay(overlayVal);
  };
  const handleProfile = () => {
    console.log("wow");
    console.log(profileClass);
    if (profileClass == "profile-hide") {
      setprofileClass("profile-show");
      return;
    }
    setprofileClass("profile-hide");
  };
  const handleNotification = () => {
    if (notificationToggle == "notification-hide") {
      setnotificationToggle("notification-show");
      return;
    }
    setnotificationToggle("notification-hide");
  };

  useImperativeHandle(ref, () => {
    return {
      toggleNotification: () => {
        console.log("he world");
        if (notificationToggle == "notification-show") {
          props = { ...props, notificationCount: 0 };
          localStorage.setItem("notifications", JSON.stringify([]));
          setnotificationToggle("notification-hide");
        }
        return;
      },
      toggleAccount: () => {
        if (profileClass == "profile-show") {
          setprofileClass("profile-hide");
        }
        return;
      },
    };
  });

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
              <img src={CalenderIcon} alt="date icon" className="date-icon" />
            </div>
            <div className="date-container">{currentDate()}</div>
          </div>
          <div onClick={handleNotification} className="header-notification">
            <div className="notification-icon-container">
              <button className="header-notification-btn">
                <img
                  src={BellIcon}
                  alt="notification icon"
                  className="date-icon"
                />
              </button>
            </div>
            <div className={notificationToggle}>
              <Notifications />
            </div>
          </div>
          <div onClick={handleProfile} className="header-user">
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
          <div className={profileClass}>
            <Profile />
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

const forwardReference = forwardRef(Header);

export default forwardReference;
