import { FC, useState } from "react";
import Search from "../../assets/icon/search.svg";

const Searchbar: FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  // Function to handle blur
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="header-searchbar">
      <div className={`searchbar  ${isFocused ? "searchbar-focused" : ""}`}>
        <button className="searchbar-icon-btn">
          <img src={Search} alt="" className="searchbar-icon" />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="searchbar-input"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default Searchbar;
