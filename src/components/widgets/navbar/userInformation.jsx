import React, { useEffect } from "react";
import { Button, Dialog } from "evergreen-ui";
import { loadStdlib } from '@reach-sh/stdlib';
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import { useDispatch, useSelector } from "react-redux";

import algowallet from "../../../assets/icons/algorandwallet.svg";
import {
  selectIsModalOpen,
  setIsModalOpen
} from "../../../features/applicationSlice";
import {
  getAccountAssets,
  killSession,
  onConnect,
  onSessionUpdate,
  reset,
  selectAddress,
  selectAssets,
  selectChain,
  selectConnected,
  selectConnector,
  selectFetching,
  setConnected,
  setFetching,
  walletConnectInit
} from "../../../features/walletConnectSlice";
import {
  ellipseAddress,
  formatBigNumWithDecimals
} from "../../../helpers/utilities";

// TODO there  can be a better naming for this -I have to abstract this from the topbar for cleaner code
const reach = loadStdlib('ALGO');

reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

export default function UserInformation() {

  let account;
  let balance;

  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectIsModalOpen);
  const loading = useSelector(selectFetching);
  const connector = useSelector(selectConnector);
  const connected = useSelector(selectConnected);
  const assets = useSelector(selectAssets);
  const address = useSelector(selectAddress);
  const chain = useSelector(selectChain);

  // connect to Algo web extension
  const connectWebWallet = async () => {
    try {
      await getWebAccount()
      await getWebBalance()
    } catch(err) {
      console.log(err)
    }
  }

  const getWebAccount = async () => {
    try {
      account = await reach.getDefaultAccount()
      console.log('Account :' + account.networkAccount.addr)
    } catch(err) {
      console.log(err)
    }
  }

  const getWebBalance = async () => {
    try {
      let rawBalance = await reach.balanceOf(account)
      balance = reach.formatCurrency(rawBalance, 4)
      console.log('Balance :' + balance)
      console.log('test')
    } catch (err) {
      console.log(err)
    }
  }

  let nativeCurrency = assets && assets.find(asset => asset && asset.id === 0);
  if (nativeCurrency === undefined || nativeCurrency == null) {
    nativeCurrency = {
      id: 0,
      // eslint-disable-next-line no-undef
      amount: BigInt(0),
      creator: "",
      frozen: false,
      decimals: 6,
      name: "Algo",
      unitName: "Algo"
    };
  }

  useEffect(() => {
    if (window.localStorage.getItem("walletconnect") != null) {
      dispatch(walletConnectInit());
    }
  }, []);

  useEffect(() => {
    if (connected) {
      dispatch(setIsModalOpen(false));
    }
  }, [connected]);

  useEffect(() => {
    // Check if connection is already established
    if (connector) {
      subscribeToEvents(connector);
      dispatch(setConnected(true));
      if (!connector.connected) {
        connector.createSession();
      }
      const { accounts } = connector;
      dispatch(onSessionUpdate(accounts));
    }
  }, [connector]);

  useEffect(() => {
    // Check if connection is already established
    if (connector && address && address.length > 0) {
      // console.log("chain: ", chain);
      dispatch(getAccountAssets({ chain, address }));
      dispatch(setFetching(true));
    }
  }, [address, chain]);

  useEffect(() => {
    dispatch(setFetching(false));
  }, [assets]);

  const subscribeToEvents = connector => {
    // console.log("%cin subscribeToEvents", "background: yellow");
    if (!connector) {
      return;
    }
    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
      console.log("Connected Accounts Details =============>", payload);
      if (error) {
        throw error;
      }
      dispatch(onConnect(payload));
    });

    connector.on("session_update", (error, payload) => {
      console.log("%cOn session_update", "background: yellow");
      if (error) {
        throw error;
      }
      const { accounts } = payload.params[0];
      dispatch(onSessionUpdate(accounts));
    });

    connector.on("disconnect", error => {
      // console.log("%cOn disconnect", "background: yellow");
      if (error) {
        throw error;
      }
      dispatch(reset());
    });
  };

  return (
    <li className="nav-item  no-arrow d-flex align-items-center">
      <div className="btn-group" role="group" aria-label="Basic example">
      <Button className="wallet-button mr-2" onClick={() => connectWebWallet()}>Connect Algo Web</Button>
      {!address ?
       (
        <Button onClick={() => dispatch(setIsModalOpen(true))}>
          {"Wallet Connect"}
        </Button>
        )
       : 
       (
        <div className="header-address-info">
          {loading ? null : (
            <span>
              {formatBigNumWithDecimals(
                nativeCurrency.amount,
                nativeCurrency.decimals
              )}
              {nativeCurrency.unitName || "units"}
            </span>
          )}
          <span className="header-account">{ellipseAddress(address)}</span>
          <Button
            className="disconnect-button"
            onClick={() => dispatch(killSession())}
          >
            {"Disconnect"}
          </Button>
        </div>
      )}
      </div>

      <Dialog
        isShown={isModalOpen}
        title="Connect to a wallet"
        hasFooter={false}
        onCloseComplete={() => dispatch(setIsModalOpen(false))}
        className="bg-dark"
      >
        <Button
          className="wallet-button"
          onClick={() => dispatch(walletConnectInit())}
        >
          <img className="wallet-icon" src={algowallet} alt="Algorand wallet" />
          <span>Algorand Wallet</span>
        </Button>
      </Dialog>
    </li>
  );
}
