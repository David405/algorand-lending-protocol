import * as PropTypes from "prop-types";
import React from "react";
import AssetRow from "./AssetRow";

const AccountAssets = props => {
  const { assets } = props;

  const nativeCurrency = assets.find(asset => asset && asset.id === 0) || {
    id: 0,
    // eslint-disable-next-line no-undef
    amount: BigInt(0),
    creator: "",
    frozen: false,
    decimals: 6,
    name: "Algo",
    unitName: "Algo"
  };

  const tokens = assets.filter(asset => asset && asset.id !== 0);

  return (
    <div>
      <h2>Account Balance</h2>
      <AssetRow key={nativeCurrency.id} asset={nativeCurrency} />
      {tokens.map(token => (
        <AssetRow key={token.id} asset={token} />
      ))}
    </div>
  );
};

AccountAssets.propTypes = {
  assets: PropTypes.array
};

AccountAssets.defaultProps = {
  assets: []
};

export default AccountAssets;
