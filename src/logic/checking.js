const logAndReturn = x => {
  console.log(x);
  return x;
};

export const balanceFor = transactions =>
  transactions
    .map(t => t.amount)
    .reduce((total, amount) => total + amount, 0);
