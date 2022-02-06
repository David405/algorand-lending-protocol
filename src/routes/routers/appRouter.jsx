import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/app/home";
import { Dashboard } from "../../pages/dashboard/dashboard";
import Lend from "../../pages/lend/lend";
import { Trade } from "../../pages/trade/trade";
import { Transactions } from "../../pages/transactions/transactions";
import { Wallet } from "../../pages/wallet/wallet";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Dashboard title="Dashboard" />} path="/dashboard" />
      <Route element={<Trade title="Trade" />} path="/trade" />
      <Route element={<Wallet title="Wallet" />} path="/wallet" />
      <Route
        element={<Transactions title="Transactions" />}
        path="/transactions"
      />
      <Route element={<Lend title="Lend" />} path="/lend" />
    </Routes>
  );
};
