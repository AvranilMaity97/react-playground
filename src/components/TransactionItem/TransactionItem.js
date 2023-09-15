import "./TransactionItem.css";

const TransactionItem = (props) => {
  return (
    <div className="transaction-item">
      <div className="title">{props.transactionData.title}</div>
      <div className="date">
        {props.transactionData.date.toLocaleDateString()}
      </div>
      <div
        className={
          props.transactionData.type === "income" ? "income" : "expense"
        }
      >
        {props.transactionData.amount}
      </div>
    </div>
  );
};
export default TransactionItem;
