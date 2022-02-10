import React from "react";
import { Route, Routes } from "react-router-dom";
import { WalletConnectPage } from "../../pages";
import { Dashboard } from "../../pages/dashboard/dashboard";
import Home from "../../pages/home/home";
import Lend from "../../pages/lend/lend";
import { Trade } from "../../pages/trade/trade";
import { Transactions } from "../../pages/transactions/transactions";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Dashboard title="Dashboard" />} path="/dashboard" />
      <Route element={<Trade title="Trade" />} path="/trade" />
      <Route
        element={<Transactions title="Transactions" />}
        path="/transactions"
      />
      <Route element={<Lend title="Lend" />} path="/lend" />
      <Route element={<Home />} path="/" />
      <Route element={<Lend title="Lend" />} path="/lend" />
      <Route element={<WalletConnectPage />} path="/walletConnect" />
    </Routes>
  );
};
