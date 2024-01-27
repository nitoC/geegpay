interface Iitem {
  Name: string;
  Amount: string;
  Status: string;
  Image: string;
  Date: string;
}
interface Iitemdata {
  item: Iitem;
  handleTransaction: (data: Iitem) => void;
}
const Transaction: React.FC<Iitemdata> = ({ item, handleTransaction }) => {
  const initItem = {
    Name: "",
    Amount: "",
    Status: "",
    Date: "",
    Image: "",
  };
  return (
    <div className="transaction-wrapper">
      <div className="transaction-user-container">
        <div className="transaction-row-name">
          {item.Image != "" && (
            <span>
              <img
                src={item.Image}
                className="transaction-avatar"
                alt="transaction avatar"
              />
            </span>
          )}
          <span className="transaction-row-name-text">{item.Name}</span>
        </div>
        <div className="transaction-row-receipt">
          <button
            onClick={() => handleTransaction(initItem)}
            type="button"
            className="back-btn"
          >
            <span className="receipt-text">Back</span>
          </button>
        </div>
      </div>
      <div className="transaction-row-date">{item.Date}</div>
      <div className="transaction-row-amount">{item.Amount}</div>
      <div className={`transaction-row-status ${item.Status} ${item.Status}`}>
        {item.Status}
      </div>
    </div>
  );
};

export default Transaction;
