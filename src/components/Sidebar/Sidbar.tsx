import { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useContext } from "react";
import { MyContext } from "../../context/ThemeContext";

import Thunder from "../../assets/icon/thunder.svg";
import Blocks from "../../assets/icon/blocks.svg";
import Trend from "../../assets/icon/brokentrend.svg";
import Team from "../../assets/icon/team.svg";
import Box from "../../assets/icon/box.svg";
import Screw from "../../assets/icon/screw.svg";
import BrokenCircle from "../../assets/icon/brokencircle.svg";
import Light from "../../assets/icon/light.svg";
import Moon from "../../assets/icon/moon.svg";
import ArrowRight from "../../assets/icon/arrowright.svg";
import Settings from "../../assets/icon/settings.svg";
import Logout from "../../assets/icon/logout.svg";

interface NavItem {
  icon: string;
  alt: string;
  active?: boolean;
  classValue?: string;
  toggle?: (val: string) => void;
  activate?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Sidebar: FC = () => {
  const { setTheme } = useContext(MyContext);
  const [activeNav, setActiveNav] = useState("Blocks" + 0);
  const [state, setState] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark-mode"
        ? {
            light: false,
            dark: true,
          }
        : {
            light: true,
            dark: false,
          }
      : {
          light: true,
          dark: false,
        }
  );

  enum colorTheme {
    "light-mode",
    "dark-mode",
  }

  const handleThemeBtn = (type: string) => {
    if (type === "light") {
      setState({ light: true, dark: false });
    } else {
      setState({ dark: true, light: false });
    }
  };

  const handleActiveBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLDivElement;
    setActiveNav(target.dataset.itemid as string);
  };
  const handleTheme = (value: string, btn: string) => {
    console.log(localStorage.getItem("theme"), "theme");
    localStorage.setItem("theme", value);
    setTheme(value);
    handleThemeBtn(btn);
  };
  const navItems: NavItem[] = [
    { icon: Blocks, alt: "Blocks", activate: handleActiveBtn },
    { icon: Trend, alt: "Trend", activate: handleActiveBtn },
    { icon: Team, alt: "Team", activate: handleActiveBtn },
    { icon: Box, alt: "Box", activate: handleActiveBtn },
    { icon: Screw, alt: "Screw", activate: handleActiveBtn },
    { icon: BrokenCircle, alt: "Broken Circle", activate: handleActiveBtn },
  ];

  const colorSchemeItems: NavItem[] = [
    {
      icon: Light,
      alt: "Light",
      active: state.light,
      classValue: `color-scheme-button color-scheme--${state.light}`,
      toggle: (val: string) => handleTheme(val, "light"),
    },
    {
      icon: Moon,
      alt: "Moon",
      classValue: `color-scheme-button color-scheme--${state.dark}`,
      active: state.dark,
      toggle: (val: string) => handleTheme(val, "dark"),
    },
  ];

  const bottomNavItems: NavItem[] = [
    { icon: ArrowRight, alt: "Arrow Right" },
    { icon: Settings, alt: "Settings" },
    { icon: Logout, alt: "Logout" },
  ];

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item, index) => {
      const itemId = uuidv4();
      return (
        <button
          key={itemId + index}
          data-itemid={item.alt + index}
          className={
            item.classValue
              ? item.classValue
              : activeNav === item.alt + index
              ? `nav-button--active`
              : `nav-button`
          }
          onClick={
            item.alt === "Light" || item.alt === "Moon"
              ? () => item.toggle && item.toggle(colorTheme[index])
              : (e) => item.activate && item.activate(e)
          }
        >
          <img src={item.icon} alt={item.alt} className={"nav-icon"} />
        </button>
      );
    });
  };

  return (
    <div className="sidebar">
      <button className="nav-button">
        <img src={Thunder} alt="Thunder" className="navigation-icon" />
      </button>

      <div className="sidebar-nav-buttons">
        <div className="nav-top-section">
          {renderNavItems(navItems)}

          <div className="color-scheme">{renderNavItems(colorSchemeItems)}</div>
        </div>

        <div className="nav-bottom-section">
          {renderNavItems(bottomNavItems)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
