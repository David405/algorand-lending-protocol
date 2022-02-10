import React from "react";
import { Card } from "../../components/elements/card";
export function Transactions(params) {
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <Card
        // components={<Button  onClick={getTransactionHistory} label={"get transactions"} className="generate-btn"/>} 
        />
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card/>
      </div>
    </div>
  );
}
