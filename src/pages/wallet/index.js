import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../../build/index.main.mjs';

import AccountAssets from "../../components/walletConnect/AccountAssets";
import LoadingIcon from "../../components/walletConnect/LoadingIcon";
import {
    selectAddress,
    selectAssets,
    selectFetching
} from "../../features/walletConnectSlice";

import { DEPLOYER, LENDER1, LENDER2, BORROWER } from "../../apis/index";

const WalletConnectPage = () => {
        const assets = useSelector(selectAssets);
        const address = useSelector(selectAddress);
        const loading = useSelector(selectFetching);

  const stdlib = loadStdlib("ALGO");  

const createUser = async() => { 
  
  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

  /* object to store addresses of test accounts created */
  var addrs = {};

  /* accDeployer - the account which deploys the application */
  const accDeployer = await getBalance(DEPLOYER);
  // "SGIOOYREJPISSGWF4CLXGBFNKGVI2SSWAYUZ4KRWSQAEKUVNP554RJIPKU"

  /* accLender1 - first account which lends funds to the pool */
  const accLender1 = await getBalance(LENDER1);
  // "JWHDCL7PJPGRZZXQADIHZ6KV3VW4JXSNCYP25RAF7ZR2P4XELBR65D46HI"

  /* accLender2 - second account which lends funds and transfers coins */
  const accLender2 = await getBalance(LENDER2);
  // "MDROX2FYU6LYTPJHSUHPTTMUULZHB6WZSOB25VTKE5HHKA77NCGVAQUU4E"

  /* accBorrower - account which borrows funds from the pool */
  const accBorrower = await getBalance(BORROWER);
  // "3N7YS6MFXZQ5BWOIZH2BH6SF3N662JGZUZTX6YHIW6HJZ2FTJKJ5MBHXMI"

  console.log('accDeployer', accDeployer);
  console.log('accLender1', accLender1);
  console.log('accLender2', accLender2);
  console.log('accBorrower', accBorrower);

  /* contract info for deployer account */
  // const ctcDeployer = DEPLOYER.contract(backend);

  /* contract info for lender, created by receiving info from deployer */
  // const ctcLender1 = LENDER1.contract(backend, ctcDeployer.getInfo());



//   console.log(`accDeployer (${accDeployer.getAddress()}...) ${await stdlib.balanceOf(accDeployer)} microALGO`);
//   console.log(`accLender1  (${accLender1.getAddress()}...) ${await stdlib.balanceOf(accLender1)} microALGO`);
//   console.log(`accLender2  (${accLender2.getAddress()}...) ${await stdlib.balanceOf(accLender2)} microALGO`);
//   console.log(`accBorrower (${accBorrower.getAddress()}...) ${await stdlib.balanceOf(accBorrower)} microALGO`);
}
useEffect(() => {
  createUser();
}, [])


  return (
    <div className="site-body">
      
      {address && (
        <div className="site-body-inner">
          <h2>Connected account</h2>
          <p>djhcnfnn</p>
          <p>{address}</p>
          {loading ? <LoadingIcon /> : <AccountAssets assets={assets} />}
        </div>
      )}
    </div>
  );
};

export { WalletConnectPage };