import * as PropTypes from "prop-types";
import React from "react";
import Icon from "./Icon";

const ASAIcon = props => {
  const src = `https://algoexplorer.io/images/assets/big/light/${props.assetID}.png`;
  return <Icon src={src} />;
};

ASAIcon.propTypes = {
  assetID: PropTypes.number
};

ASAIcon.defaultProps = {
  assetID: 0
};

export default ASAIcon;
