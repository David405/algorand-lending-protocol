import { TextInput } from "evergreen-ui";
import React from "react";
import { algorand, dai, eth, usdc, wbtc } from "../../assets/icons";
import { Button } from "../../components/elements";
import { Card } from "../../components/elements/card";
import ListItem from "../../components/elements/list-item";
import Table from "../../components/elements/table/table";
import "./borrow.css";
import BorrowTab from "./borrowTab";
import RepayTab from "./repayTab";
const Borrow = () => {
  const tableData = [
    { asset: "" },
    { wallet_balance: "" },
    { base_apy: "" },
    { suppy_reward_apy: "" },
    { boost_apy: "" }
  ];

  const [step, setStep] = React.useState(1);
  const AssetList = ({ setStep }) => {
    return (
      <ListItem>
        <Table>
          <tr>
            <th>
              <small>Assets</small>
            </th>
            <th>
              <small>Available to Borrow</small>
            </th>
            <th>
              <small>Available Liquidity</small>
            </th>
            <th>
              <small>Borrow Base APR</small>
            </th>
            <th>
              <small>Borrowed Reward APY</small>
            </th>
            <th>
              <small>Boost APY(Max)</small>
            </th>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center justify-content-center py-4">
                <div className="bg-white p-1 rounded-circle mr-2">
                  <img src={algorand} height={20} width={20} alt="" />
                </div>
                <div className="text-bold">
                  <strong>ASA</strong>
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
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setStep(2)}
                >
                  Borrow
                </button>
              </div>
            </td>
            <td>
              <div>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setStep(3)}
                >
                  Repay
                </button>
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
                  <strong>ASA</strong>
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
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Borrow</button>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Repay</button>
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
                  <strong>ASA</strong>
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
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Borrow</button>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Repay</button>
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
                  <strong>ASA</strong>
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
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Borrow</button>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Repay</button>
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
                  <strong>ASA</strong>
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
                <h6 className="">+99.66%</h6>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Borrow</button>
              </div>
            </td>
            <td>
              <div>
                <button className="btn btn-outline-primary">Repay</button>
              </div>
            </td>
          </tr>
        </Table>
      </ListItem>
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
              <option value="all_assets">ASA</option>
            </select>
          </div>
        </header>
        {step === 1 && (
          <Card
            cardClass="mt-5"
            components={<AssetList setStep={setStep} />}
          ></Card>
        )}
        {step === 3 && <Card cardClass="mt-5" components={<RepayTab />}></Card>}
        {step === 2 && (
          <Card
            cardClass="mt-5"
            components={<BorrowTab setStep={setStep} />}
          ></Card>
        )}
        {/*  */}
      </div>
    </section>
  );
};

export default Borrow;
