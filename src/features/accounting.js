import { logAndReturn } from "@/util/debug";

export const balanceFor = transactions =>
  transactions
    .map(logWithLabelAndReturn("transaction"))
    .map(t => t.amount)
    .reduce((total, amount) => total + amount, 0);
