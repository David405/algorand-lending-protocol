import React from "react";
import { algorand, dai, eth, usdc, wbtc } from "../../assets/icons";
import { Button } from "../../components/elements";
import { Card } from "../../components/elements/card";
import ListItem from "../../components/elements/list-item";
import Table from "../../components/elements/table/table";
import "./lend.css";
const Lend = () => {
  const tableData = [
    { asset: "" },
    { wallet_balance: "" },
    { base_apy: "" },
    { suppy_reward_apy: "" },
    { boost_apy: "" }
  ];

  const [step, setStep] = React.useState(1);
  const AssetList = () => {
    return (
      <ListItem>
        <Table>
          <tr>
            <th>
              <small>Assets</small>
            </th>
            <th>
              <small>Wallet Balance</small>
            </th>
            <th>
              <small>Base APY</small>
            </th>
            <th>
              <small>Supply Reward APY</small>
            </th>
            <th>
              <small>Boost APY</small>
            </th>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center justify-content-center py-4">
                <div className="bg-white p-1 rounded-circle mr-2">
                  <img src={algorand} height={20} width={20} alt="" />
                </div>
                <div className="text-bold">
                  <strong>DAI</strong>
                </div>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">0.00</h6>
                <small>$0.00</small>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+33.22%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Supply</button>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Withdraw</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center justify-content-center py-4">
                <div className="bg-white p-1 rounded-circle mr-2">
                  <img src={eth} height={20} width={20} alt="" />
                </div>
                <div className="text-bold">
                  <strong>DAI</strong>
                </div>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">0.00</h6>
                <small>$0.00</small>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+33.22%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Supply</button>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Withdraw</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center justify-content-center py-4">
                <div className="bg-white p-1 rounded-circle mr-2">
                  <img src={dai} height={20} width={20} alt="" />
                </div>
                <div className="text-bold">
                  <strong>DAI</strong>
                </div>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">0.00</h6>
                <small>$0.00</small>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+33.22%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Supply</button>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Withdraw</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center justify-content-center py-4">
                <div className="bg-white p-1 rounded-circle mr-2">
                  <img src={usdc} height={20} width={20} alt="" />
                </div>
                <div className="text-bold">
                  <strong>DAI</strong>
                </div>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">0.00</h6>
                <small>$0.00</small>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+33.22%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Supply</button>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Withdraw</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center justify-content-center py-4">
                <div className="bg-white p-1 rounded-circle mr-2">
                  <img src={wbtc} height={20} width={20} alt="" />
                </div>
                <div className="text-bold">
                  <strong>DAI</strong>
                </div>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">0.00</h6>
                <small>$0.00</small>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+33.22%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Supply</button>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Withdraw</button>
              </div>
            </td>
          </tr>
        </Table>
      </ListItem>
    );
  };

  const Details = () => {
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
          <Button label="Approve" />
        </ListItem>
      </section>
    );
  };
  return (
    <section className="lend">
      <div className="lend-main">
        <header className="main-header">
          <div>
            <select className="lend-option">
              <option value="all_assets">All Assets</option>
              <option value="all_assets">Algorand</option>
              <option value="all_assets">other</option>
            </select>
          </div>
        </header>
        <Card cardClass="mt-5" components={<AssetList />}></Card>
        {/* <Card cardClass="mt-5" components={<Details />}></Card> */}
      </div>
    </section>
  );
};

export default Lend;
