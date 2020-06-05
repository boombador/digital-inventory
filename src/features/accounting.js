// import { logAndReturn } from "@/util/debug";

// not really accounting but leaving in this file for convenience (also, these
// are more challenging than the accounting functions)
export const calculateDayOfMonth = timestamp => {
  return 15;
}
export const calculateDaysInMonth = timestamp => {
  return 30;
}

// main accounting functions

// add up the amount from each transaction
export const combinedTotal = transactions => {
  let result = 0;
  transactions.forEach(transaction => {
    result += transaction.amount;
  })
  return result;
}

// calculate the expected spend given the assumption that income (post-tax) is
// equally split between each day in the month
export const projectedSpend = (income, dayOfMonth, daysInMonth) => {
  return income;
}

export const projectedDailySpend = (income, daysInMonth) => {
  return 0;
}