import { FC, useState } from "react";
import Marcus from "../../assets/image/marcus.png";
import Jaydon from "../../assets/image/jaydon.png";
import Corey from "../../assets/image/corey.png";
import Cooper from "../../assets/image/cooper.png";
import Philip from "../../assets/image/philip.png";
import Document from "../../assets/icon/document-download.svg";
import { FiMoreVertical } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

const Card: FC = () => {
  const [data, setData] = useState<{ height: string; id: null | number }>({
    height: "table-hide",
    id: null,
  });

  const userTransactions = [
    {
      Name: "Marcus Bergson",
      Amount: "$80,000",
      Status: "Paid",
      Date: "Nov 15, 2023",
      Image: Marcus,
    },
    {
      Name: "Jaydon Vaccaro",
      Amount: "$150,000",
      Status: "Refund",
      Date: "Nov 15, 2023",
      Image: Jaydon,
    },
    {
      Name: "Corey Schleifer",
      Amount: "$87,000",
      Status: "Paid",
      Date: "Nov 14, 2023",
      Image: Corey,
    },
    {
      Name: "Cooper Press",
      Amount: "$100,000",
      Status: "Refund",
      Date: "Nov 14, 2023",
      Image: Cooper,
    },
    {
      Name: "Phillip Lubin",
      Amount: "$78,000",
      Status: "Paid",
      Date: "Nov 13, 2023",
      Image: Philip,
    },
  ];

  const handleHeight = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLDivElement;
    const minHeight = "table-hide";
    const maxHeight = "table-show";
    const dataId = parseInt(target.dataset.id as string);
    if (data.id === dataId && data.height === maxHeight) {
      console.log(data.id, "he1");

      return setData({ id: dataId, height: minHeight });
    }
    if (data.id === dataId && data.height === minHeight) {
      console.log(target, "he2");
      return setData({ id: dataId, height: maxHeight });
    }
    console.log(target.dataset.id, "he3");
    return setData({ id: dataId, height: maxHeight });
  };

  return (
    <div>
      <div className="transaction-container">
        <div className="platform-header">
          <div className="platform-heading-container">
            <h2 className="platform-heading">Last Orders</h2>
          </div>
          <div className="platform-header-link-container">
            <a href="#" className="platform-link">
              See All
            </a>
          </div>
        </div>
        <div className="transaction-table-container">
          <div className="transaction-table">
            <div className="table-headers">
              <div className="table-header">Name</div>
              <div className="table-header">Date</div>
              <div className="table-header">Amount</div>
              <div className="table-header">Status</div>
              <div className="table-header">Invoice</div>
            </div>
            <div className="table-body">
              {userTransactions.map((item, key) => (
                <div
                  key={uuidv4()}
                  className={`table-data ${
                    data.id === key ? data.height : "table-hide"
                  }`}
                >
                  <div className="table-user-container">
                    <div className="table-row-name">
                      <span>
                        <img
                          src={item.Image}
                          className="table-avatar"
                          alt="transaction avatar"
                        />
                      </span>
                      <span className="table-row-name-text">{item.Name}</span>
                    </div>
                    <span className="moreVerti-container">
                      <button
                        onClick={(e) => handleHeight(e)}
                        data-id={key}
                        className="more-btn"
                      >
                        <FiMoreVertical
                          style={{ pointerEvents: "none" }}
                          className="more-icon"
                        />
                      </button>
                    </span>
                  </div>
                  <div className="table-row-date">{item.Date}</div>
                  <div className="table-row-amount">{item.Amount}</div>
                  <div
                    className={`table-row-status ${item.Status} ${item.Status}`}
                  >
                    {item.Status}
                  </div>
                  <div className="table-row-receipt">
                    <button type="button" className="view-receipt-btn">
                      <span>
                        <img
                          src={Document}
                          alt="document icon"
                          className="document-icon"
                        />
                      </span>
                      <span className="receipt-text">View</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
