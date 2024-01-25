import { FC } from "react";
import Search from "../../assets/icon/search.svg";

const Searchbar: FC = () => {
  return (
    <div className="header-searchbar">
      <div className="searchbar">
        <button className="searchbar-icon-btn">
          <img src={Search} alt="" className="searchbar-icon" />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="searchbar-input"
        />
      </div>
    </div>
  );
};

export default Searchbar;
