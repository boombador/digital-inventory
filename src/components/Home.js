import React from "react";
import Layout from "@/components/Layout";
import { combinedTotal, projectedSpend, calculateDayOfMonth, calculateDaysInMonth } from "@/features/accounting";

const transactionsSoFar = [
  { amount: -10, description: 'Sandwich' },
  { amount: -20, description: 'Some soup and a sandwich' },
  { amount: -60, description: 'Hot new videogame' },
];

// Fake data for now
// TODO: pull from redux store instead
const hardcodedSampleData = {
  income: 1000,
  monthProgress: { currentDay: 15, daysInMonth: 30 },
};

const Home = () => {
  const { income } = hardcodedSampleData;
  const { currentDay, daysInMonth } = hardcodedSampleData.monthProgress;
  return (
    <Layout>
      <h2>Metadata</h2>
      <div className="income">Income: {income}</div>
      <div className="month-progress">
        <span>Day {currentDay}</span>&nbsp;
      <span>of {daysInMonth}</span>
      </div>

      <h2>Calculated Values</h2>
      <div id="calculation-results">
        <div className="projected-spend-daily">Expected daily expenditure: {projectedSpend(income, daysInMonth)}</div>
        <div className="projected-spend-mtd">Expected expenditures: {projectedSpend(income, currentDay, daysInMonth)}</div>
        <div className="actual-spend">Real expenditures: {combinedTotal(transactionsSoFar)}</div>
      </div>

      <h2>Transactions</h2>
      <div className="transaction-listing">
        {transactionsSoFar.map((transaction, i) =>
          <div key={i}>{JSON.stringify(transaction)}</div>
        )}
      </div>
    </Layout>
  )
};

export default Home;
