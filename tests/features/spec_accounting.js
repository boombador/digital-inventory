import { balanceFor } from "../src/features/checking";

const sampleTransactions = [
  { amount: 10, category: "loans", description: "jimmy helped me out" },
  { amount: -5.5, category: "food", description: "delicious sandwich" },
  { amount: -3.55, category: "loans", description: "gallon of gasoline" },
  { amount: -10, category: "loans", description: "paid jimmy back" }
];

describe("logic/checking", function() {
  describe("#balanceFor", () => {
    it("to return a negative balance for an unfortunate series of transactions", function() {
      expect(balanceFor(sampleTransactions)).toEqual(-9.05);
    });
  });
});
