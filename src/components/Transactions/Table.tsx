import { FC } from "react";
import Marcus from "../../assets/image/marcus.png";
import Jaydon from "../../assets/image/jaydon.png";
import Corey from "../../assets/image/corey.png";
import Cooper from "../../assets/image/cooper.png";
import Philip from "../../assets/image/philip.png";
import Document from "../../assets/icon/document-download.svg";
import { v4 as uuidv4 } from "uuid";

const Card: FC = () => {
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
              {userTransactions.map((item) => (
                <div key={uuidv4()} className="table-data">
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
                  <div className="table-row-date">{item.Date}</div>
                  <div className="table-row-amount">{item.Amount}</div>
                  <div className={`table-row-status ${item.Status}`}>
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
