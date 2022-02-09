import React from "react";
import { useSelector } from "react-redux";
import AccountAssets from "../../components/walletConnect/AccountAssets";
import LoadingIcon from "../../components/walletConnect/LoadingIcon";
import {
    selectAddress,
    selectAssets,
    selectFetching
} from "../../features/walletConnectSlice";

const WalletConnectPage = () => {
        const assets = useSelector(selectAssets);
        const address = useSelector(selectAddress);
        const loading = useSelector(selectFetching);

        return ( <
            div className = "site-bodyss" > {
                address && ( <
                    div className = "site-body-inner" >
                    <
                    h2 > Connected account < /h2> <
                    p > { address } < /p> {
                        loading ? < LoadingIcon / > : < AccountAssets assets = { assets }
                        />} <
                        /div>
                    )
                } <
                /div>
            );
        };

        export { WalletConnectPage };