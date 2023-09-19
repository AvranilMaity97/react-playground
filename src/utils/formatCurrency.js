const formatCurrency = (amount) => {
  amount = String(amount);
  if (+amount < 1000) {
    return amount + "";
  } else {
    let formattedCurrency = amount.substring(amount.length - 3, amount.length);
    amount = amount.substring(0, amount.length - 3);
    while (amount.length > 2) {
      formattedCurrency =
        amount.substring(amount.length - 2, amount.length) +
        "," +
        formattedCurrency;
      amount = amount.substring(0, amount.length - 2);
    }
    formattedCurrency = "₹" + amount + "," + formattedCurrency;
    return formattedCurrency;
  }
};

export default formatCurrency;
