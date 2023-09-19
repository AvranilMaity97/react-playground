import formatCurrency from "../../utils/formatCurrency";
import "./TransactionItem.css";

import editIcon from "../../assets/images/icons/edit.svg";
import deleteIcon from "../../assets/images/icons/delete.svg";

const TransactionItem = (props) => {
  return (
    <div className="transaction-item">
      <div className="title">{props.transactionData.title}</div>
      <div className="date">{props.transactionData.date}</div>
      <div
        className={
          props.transactionData.type === "income" ? "income" : "expense"
        }
      >
        {formatCurrency(props.transactionData.amount)}
      </div>
      <div className="actions">
        <div className="action-wrapper">
          <img src={editIcon}></img>
        </div>
        <div className="action-wrapper">
          <img src={deleteIcon}></img>
        </div>
      </div>
    </div>
  );
};
export default TransactionItem;
