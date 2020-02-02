import React from "react";
import { connect } from "react-redux";
import { counterSlice } from "@/store";
import { balanceFor } from "@/features/accounting";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

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
      <Button onClick={decrement} text="Decrease that Pesky Balance" />
      <Button onClick={increment} text="Make it Bigger, Why Don't You!" />
    </Layout>
  );
};

const mapStateToProps = state => ({
  count: state
});

export default connect(mapStateToProps, { increment, decrement })(Balance);
