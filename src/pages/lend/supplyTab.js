import { TextInput } from "evergreen-ui";
import React from "react";
import { algorand, dai, eth, usdc, wbtc } from "../../assets/icons";
import { Button } from "../../components/elements";
import { Card } from "../../components/elements/card";
import ListItem from "../../components/elements/list-item";
import Table from "../../components/elements/table/table";
import "./lend.css";
const SupplyTab = ({ setStep }) => {
  return (
    <section>
      <ListItem>
        <header className="heading d-flex">
          <div className="mr-5">
            <div className="bg-white p-1 rounded-circle mr-2">
              <img src={algorand} height={20} width={20} alt="" />
            </div>
          </div>
          <div>
            <h4>Transaction Information</h4>
          </div>
        </header>
      </ListItem>
      <ListItem>
        <header className="heading d-flex mt-2 align-items-center">
          <div className="mr-5">
            <div className="bg-white p-1 rounded-circle mr-2">
              <img src={algorand} height={50} width={50} alt="" />
            </div>
          </div>
          <div>
            <h6>
              To supply DAI to the Augmented Finance protocol, you need to
              enable it first.
            </h6>
          </div>
        </header>
      </ListItem>
      <ListItem>
        <header className="heading d-flex align-items-center justify-content-between mt-2 py-4">
          <div>
            <h6>Total APY</h6>
          </div>
          <div>$33.00</div>
        </header>
      </ListItem>
      <ListItem>
        <header className="heading d-flex align-items-center justify-content-between mt-2">
          <div className="d-flex align-items-center justify-content-center">
            <div className="bg-white p-1 rounded-circle mr-2">
              <img src={algorand} height={20} width={20} alt="" />
            </div>
            <div className="text-bold">
              <strong>Algorand</strong>
            </div>
          </div>
          <div>
            <h6>$55.44</h6>
          </div>
        </header>
      </ListItem>
      <ListItem>
        <header className="heading d-flex align-items-center justify-content-between mt-2">
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-bold">
              <strong>Supply Reward APY</strong>
            </div>
          </div>
          <div>
            <h6>$55.44</h6>
          </div>
        </header>
      </ListItem>
      <ListItem>
        <header className="heading d-flex align-items-center justify-content-between mt-2">
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-bold">
              <strong>Supply Boost APY</strong>
            </div>
          </div>
          <div>
            <h6>$55.44</h6>
          </div>
        </header>
      </ListItem>
      <ListItem>
        <header className="heading d-flex align-items-center justify-content-between mt-2">
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-bold">
              <strong>Wallet Balance(available to supply)</strong>
            </div>
          </div>
          <div>
            <h6>$55.44</h6>
          </div>
        </header>
      </ListItem>
      <ListItem>
        <Button label="Approve" className="mr-2" />
        <Button label="Back" onClick={() => setStep(1)} />
      </ListItem>
    </section>
  );
};

export default SupplyTab;
