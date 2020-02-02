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
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        Balance information here!
      </div>
      <div>
        <Button
          className="pure-u-1-3"
          onClick={decrement}
          text="Decrease that Pesky Balance"
        />
        <div style={{ textAlign: "center" }} className="pure-u-1-3">
          <span>Current balance:</span>
          <span>{count}</span>
        </div>
        <Button
          className="pure-u-1-3"
          onClick={increment}
          text="Make it Bigger, Why Don't You!"
        />
      </div>
    </Layout>
  );
};

const mapStateToProps = state => ({
  count: state
});

export default connect(mapStateToProps, { increment, decrement })(Balance);
