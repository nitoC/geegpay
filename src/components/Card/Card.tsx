import { FC } from "react";
import Bull from "../../assets/icon/trending-up.svg";
import Bear from "../../assets/icon/trending-down.svg";
import BullTrend from "../../assets/image/bull.png";
import BearTrend from "../../assets/image/bear.png";
import { ICard } from "../../interfaces/interfaces";

interface IDetails {
  details: ICard;
}

const Card: FC<IDetails> = ({ details }) => {
  const { type, icon, profit, value, heading } = details;
  console.log(type === "bull");
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-icon-container">
          <img src={icon} alt="trend" />
        </div>
        <div className="card-type-container">
          <img
            src={type == "bull" ? BullTrend : BearTrend}
            alt="trend"
            className="card-type-img"
          />
        </div>
      </div>
      <div className="card-main">
        <div className="card-heading-container">
          <h2 className="card-heading">{heading}</h2>
        </div>
        <h2 className="card-value">{value}</h2>
      </div>
      <div className="card-bottom">
        <div
          className={
            type === "bull"
              ? "card-profit-container bull-bottom"
              : "card-profit-container bear-bottom"
          }
        >
          <div className="profit-icon-container">
            <img
              src={type == "bull" ? Bull : Bear}
              alt="profit"
              className="profit-icon"
            />
          </div>
          <p className="profit-text">{profit}</p>
        </div>
        <div className="bottom-text-container">
          <p className="bottom-text">vs. previous month</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
