import React from "react";
import { Card } from "../../components/elements/card";
import { MiniTransactionWidget } from "../../components/widgets/transactions";
import "./dashboard.css";

export function Dashboard() {
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-7">
        <div className="row">
          <div className="col-lg-12">
            {/* <Card title={"Trade Center"} components={<TradeView />} /> */}
          </div>
          <div className="col-lg-6">
            <Card title={"Generate Algorand Wallet"} />
          </div>
          <div className="col-lg-6">
            <Card title={"Create User Ledger Account"} />
          </div>
        </div>
        {/* <Card components={tradeButtons} /> */}
      </div>
      <div className="col-xl-5 col-lg-5">
        <Card title="Transactions" components={<MiniTransactionWidget />} />
      </div>
    </div>
  );
}
