import React from "react";
import { Card } from "../../components/elements/card";
export function Transactions(params) {
  const transactions = 0
  const transactions_result = (transactions == 0) ? <><p className="mx-auto pt-5 text-white-50">No transactions done yet.</p></> : <> <div className="col-xl-7 col-lg-7">
  <Card
  // components={<Button  onClick={getTransactionHistory} label={"get transactions"} className="generate-btn"/>} 
  />
</div>
</>
  return (
    <div className="row">
      {transactions_result}
    </div>
  );
}
