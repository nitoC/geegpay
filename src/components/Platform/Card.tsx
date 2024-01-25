import Range from "./Range";
import { IRange } from "../../interfaces/interfaces";
import { v4 as uuidv4 } from "uuid";

const Card = () => {
  enum rangeClass {
    range_first,
    range_second,
    range_third,
    range_fourth,
  }
  const rangeData: IRange[] = [
    {
      title: "Book Bazaar",
      value: 245,
      total: 452,
      expenses: "$2,500,000",
      profit: "+15%",
    },
    {
      title: "Artisan Aisle",
      value: 204.313,
      total: 452,
      expenses: "$1,800,000",
      profit: "+10%",
    },
    {
      title: "Toy Troop",
      value: 122.131,
      total: 452,
      expenses: "$1,200,000",
      profit: "+8%",
    },
    {
      title: "XStore",
      value: 122.131,
      total: 452,
      expenses: "$600,000",
      profit: "+5%",
    },
  ];
  return (
    <div className="platform-container">
      <div className="platform-header">
        <div className="platform-heading-container">
          <h2 className="platform-heading">Top Platform</h2>
        </div>
        <div className="platform-header-link-container">
          <a href="#" className="platform-link">
            See All
          </a>
        </div>
      </div>
      <div className="platform-content">
        {rangeData.map((data, key) => {
          return (
            <div key={uuidv4() + key} className="range-container">
              <div className="range-title-container">
                <h2 className="range-title">{data.title}</h2>
              </div>
              <Range
                data={{
                  title: data.title,
                  value: data.value,
                  total: data.total,
                }}
                classVal={rangeClass[key]}
              />
              <div className="range-bottom">
                <p className="expenses">{data.expenses} </p>
                <p className="range-profit">{data.profit}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
