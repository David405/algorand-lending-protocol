import * as PropTypes from "prop-types";
import React from "react";
import algo from "../../assets/icons/algo.svg";
import { formatBigNumWithDecimals } from "../../helpers/utilities";
import ASAIcon from "./ASAIcon";
import Icon from "./Icon";

const AssetRow = props => {
  const { asset } = props;
  const nativeCurrencyIcon = asset.id === 0 ? algo : null;

  return (
    <div className="asset-row" {...props}>
      <div className="asset-info">
        {nativeCurrencyIcon ? (
          <Icon src={nativeCurrencyIcon} />
        ) : (
          <ASAIcon assetID={asset.id} />
        )}
        <span>{asset.name}</span>
      </div>
      <div>
        <div>
          {`${formatBigNumWithDecimals(
            asset.amount,
            asset.decimals
          )} ${asset.unitName || "units"}`}
        </div>
      </div>
    </div>
  );
};

AssetRow.propTypes = {
  asset: PropTypes.object
};

AssetRow.defaultProps = {
  asset: {}
};

export default AssetRow;
