import { FC, useState } from "react";
import {
  TotalUserTransactions,
  userTransactions,
} from "../../mockData/userTransaction.ts";
import Document from "../../assets/icon/document-download.svg";
import { FiMoreVertical } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import Transaction from "../Modals/Transaction";

interface Iitem {
  Name: string;
  Amount: string;
  Status: string;
  Image: string;
  Date: string;
}

const Card: FC = () => {
  const [tableData, settableData] = useState(userTransactions);
  const [tableClass, settableClass] = useState("table-block");
  const init = { Name: "", Amount: "", Status: "", Date: "", Image: "" };
  const [toggleView, settoggleView] = useState("transaction-hide");
  const [dataItem, setdataItem] = useState<Iitem>(init);
  const [overlay, setOverlay] = useState("table-overlay-hide");

  const handleTransaction = (data: Iitem) => {
    if (toggleView == "transaction-hide") {
      console.log(data);
      settoggleView("transaction-show");
      setdataItem(data);
      return;
    }
    settoggleView("transaction-hide");
    setdataItem(init);
  };

  const handleTableClass = () => {
    if (tableClass === "table-block") {
      setOverlay("table-overlay-show");
      settableClass("table-fixed");
      settableData(TotalUserTransactions);
      return;
    }
    setOverlay("table-overlay-hide");
    settableData(userTransactions);
    return settableClass("table-block");
  };
  const [data, setData] = useState<{ height: string; id: null | number }>({
    height: "table-hide",
    id: null,
  });

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
    <>
      <div onClick={handleTableClass} className={overlay}></div>
      <div className={tableClass}>
        <div className="transaction-container">
          <div className="platform-header">
            <div className="platform-heading-container">
              <h2 className="platform-heading">Last Orders</h2>
            </div>
            <div
              onClick={handleTableClass}
              className="platform-header-link-container"
              style={{ cursor: "pointer" }}
            >
              <span style={{ cursor: "pointer" }} className="platform-link">
                {tableClass === "table-block" ? "See All" : "See Less"}
              </span>
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
                {tableData.map((item, key) => (
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
                      <button
                        onClick={() => handleTransaction(item)}
                        type="button"
                        className="view-receipt-btn"
                      >
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
        <div className={toggleView}>
          <Transaction item={dataItem} handleTransaction={handleTransaction} />
        </div>
      </div>
    </>
  );
};

export default Card;
