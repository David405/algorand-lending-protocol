import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

/* log messages from the app */
const log = (msg) => console.log(`[APP]   : ${msg}`);

/* log messages from Reach */
const logReach = (addrs) => {
  const f = ([s,e]) => {
    const s1 = e[0] === null ? "" : ` ${addrs[e[0]]}`;
    const s2 = typeof(addrs[e[1]]) === 'undefined' ?
      (typeof(e[1]) === 'undefined' ? "" : e[1]) : addrs[e[1]];
    const s3 = typeof(e[2]) === 'undefined' ? "" : e[2];
    console.log(`[REACH] : ${s}${s1} ${s2} ${s3}`);
  };

  return f;
};

/* deposit and withdraw behavior */
const depositAndWithdraw = () => {
  var x = 0;
  const f = () => {
    if(x%2 === 0) {
      x = x + 1;
      return ['Deposit', 100];
    } else {
      x = x+ 1;
      return ['Withdraw', 50];
    }
  };
   
  return f;
};

/* deposit and transfer behavior */
const depositAndTransfer = (addr) => {
  var x = 0;
  const f = () => {
    if(x%2 === 0) {
      x = x + 1;
      return ['Deposit', 50];
    } else {
      x = x + 1;
      return ['Transfer', {amt: 25, to: addr}];
    }
  };

  return f;
};

const borrowAndRepay = () => {
  var x = 0;
  const f = () => {
    if(x%2 === 0) {
      x = x + 1;
      return ['Borrow', 50];
    } else {
      x = x + 1;
      return ['Repay', 25]
    }
  }

  return f;
};

(async () => {
  log("Starting application");

  /* starting balance for all test accounts */
  const startingBalance = stdlib.parseCurrency(100);

  /* object to store addresses of test accounts created */
  var addrs = {};

  /* accDeployer - the account which deploys the application */
  const accDeployer = await stdlib.newTestAccount(startingBalance);

  /* accLender1 - first account which lends funds to the pool */
  const accLender1 = await stdlib.newTestAccount(startingBalance);

  /* accLender2 - second account which lends funds and transfers coins */
  const accLender2 = await stdlib.newTestAccount(startingBalance);

  /* accBorrower - account which borrows funds from the pool */
  const accBorrower = await stdlib.newTestAccount(startingBalance);

  /* store each account address mapped to its name in the addrs object */
  addrs[accDeployer.getAddress()] = "accDeployer"
  addrs[accLender1.getAddress()]  = "accLender1 "
  addrs[accLender2.getAddress()]  = "accLender2 "
  addrs[accBorrower.getAddress()] = "accBorrower"

  log(`accDeployer (${accDeployer.getAddress()}...) ${await stdlib.balanceOf(accDeployer)} microALGO`);
  log(`accLender1  (${accLender1.getAddress()}...) ${await stdlib.balanceOf(accLender1)} microALGO`);
  log(`accLender2  (${accLender2.getAddress()}...) ${await stdlib.balanceOf(accLender2)} microALGO`);
  log(`accBorrower (${accBorrower.getAddress()}...) ${await stdlib.balanceOf(accBorrower)} microALGO`);

  /* contract info for deployer account */
  const ctcDeployer = accDeployer.contract(backend);

  /* contract info for lender, created by receiving info from deployer */
  const ctcLender1 = accLender1.contract(backend, ctcDeployer.getInfo());

  /* contract info for lender, created by receiving info from deployer */
  const ctcLender2 = accLender2.contract(backend, ctcDeployer.getInfo());

  /* contract info for borrower, created by receiving info from deployer */
  const ctcBorrower = accBorrower.contract(backend, ctcDeployer.getInfo());

//   await Promise.all([
//     backend.Deployer(ctcDeployer, {
//       log: logReach(addrs)
//     }),
//     backend.Lender(ctcLender1, {
//       getMsg: depositAndWithdraw(),
//       printTokenBalance: async (token) => log(`Account token balance:  accLender1  ${await stdlib.balanceOf(accLender1, token)} tokens`),
//       informTokenId: async (token) => await accLender1.tokenAccept(token)
//     }),
//     backend.Lender(ctcLender2, {
//       getMsg: depositAndTransfer(accLender1.getAddress()),
//       printTokenBalance: async (token) => log(`Account token balance:  accLender2  ${await stdlib.balanceOf(accLender2, token)} tokens`),
//       informTokenId: async (token) => await accLender2.tokenAccept(token)
//     }),
//     backend.Borrower(ctcBorrower, {
//       getMsg: borrowAndRepay()
//     })
//   ]);
})();
