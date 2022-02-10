import React from "react";
import { Card } from "../../components/elements/card";
import { BorrowTable } from "../../components/elements/table";
import { MiniTransactionWidget } from "../../components/widgets/transactions";
import ClaimInfo from "./claimInfo";
import "./dashboard.css";
import LenderInfo from "./lenderInfo";

export function Dashboard() {
  return (
    <div className="row">
      <div className="col-xl-5 col-lg-5 my-2">
        <Card title="Lend Information" components={<LenderInfo/>} />
      </div>
      <div className="col-xl-7 col-lg-7 my-2">
      <Card title="Borrow Information" components={<BorrowTable/>}/>
      </div>
      <div className="col-xl-12 col-lg-12 mt-3 ">
      <Card title="" components={<ClaimInfo/>}/>
      </div>
    </div>
  );
}
