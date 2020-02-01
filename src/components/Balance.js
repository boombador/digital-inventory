import React from "react";
import Layout from "@/components/Layout";
import { balanceFor } from "@/features/accounting";
import { connect } from "react-redux";
import { counterSlice } from "@/store";

const {
  actions: { increment, decrement }
} = counterSlice;

const Balance = props => {
  const { count, increment, decrement } = props;
  return (
    <Layout>
      <div>Balance information here!</div>
      <div>
        <span>Current balance:</span>
        <span>{count}</span>
      </div>
      <button onClick={decrement}>Decrease that Pesky Balance</button>
      <button onClick={increment}>Make it Bigger, Why Don&apos;t You!</button>
    </Layout>
  );
};

const mapStateToProps = state => ({
  count: state
});

export default connect(mapStateToProps, { increment, decrement })(Balance);
