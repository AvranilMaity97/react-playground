import TransactionItem from "../TransactionItem/TransactionItem";

const Transactions = () => {
  const transactions = [
    {
      id: 0,
      title: "Salary",
      type: "income",
      amount: "106789",
      description: "Some description if necessary",
      tags: ["coditas", "salary"],
      date: new Date(),
    },
    {
      id: 1,
      title: "Rent",
      type: "expense",
      amount: "14000",
      description: "",
      tags: ["rent", "pune"],
      date: new Date(),
    },
  ];
  return (
    <div className="transactions">
      <TransactionItem transactionData={transactions[0]} />
      <TransactionItem transactionData={transactions[1]} />
    </div>
  );
};

export default Transactions;
