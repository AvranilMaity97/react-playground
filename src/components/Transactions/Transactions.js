import TransactionItem from "../TransactionItem/TransactionItem";
import "./Transactions.css";
import transactionData from "./transactions.json";

const Transactions = () => {
  const transactions = transactionData;
  return (
    <div className="transactions">
      {transactions.map((transactionItem) => {
        return <TransactionItem transactionData={transactionItem} />;
      })}
    </div>
  );
};

export default Transactions;
