import { TextInput } from "evergreen-ui";
import React from "react";
import { toast } from "react-toastify";
import { algorand, dai, eth, usdc, wbtc } from "../../assets/icons";
import { Button } from "../../components/elements";
import { Card } from "../../components/elements/card";
import ListItem from "../../components/elements/list-item";
import Table from "../../components/elements/table/table";
import "./borrow.css";
import BorrowTab from "./borrowTab";
import RepayTab from "./repayTab";
const Borrow = () => {
  const [step, setStep] = React.useState(1);

  // AVAILABLE LIQUIDITY	BORROW BASE APR	BORROWED REWARD APY	BOOST APY(MAX)
  const AssetList = ({ setStep }) => {
    const tableData = [
      {
        id: 1,
        asset: "",
        available_borrow: "",
        avail_liquidity: "",
        borrow_base_apr: "",
        borrow_reward_apy: "",
        boost_apy: "",
        coin: "Algo",
        img: algorand
      },
      {
        id: 2,
        asset: "",
        available_borrow: "",
        avail_liquidity: "",
        borrow_base_apr: "",
        borrow_reward_apy: "",
        boost_apy: "",
        coin: "Eth",
        img: eth
      },
      {
        id: 3,
        asset: "",
        available_borrow: "",
        avail_liquidity: "",
        borrow_base_apr: "",
        borrow_reward_apy: "",
        boost_apy: "",
        coin: "DAI",
        img: dai
      },
      {
        id: 4,
        asset: "",
        available_borrow: "",
        avail_liquidity: "",
        borrow_base_apr: "",
        borrow_reward_apy: "",
        boost_apy: "",
        coin: "USDC",
        img: usdc
      }
    ];
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

          {tableData.map(tr => (
            <tr>
              <td>
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div className="bg-white p-1 rounded-circle mr-2">
                    <img src={tr.img} height={20} width={20} alt={tr.asset} />
                  </div>
                  <div className="text-bold">
                    <strong>{tr.coin.toUpperCase()}</strong>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <h6 className="">$0.00</h6>
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
                    onClick={() =>
                      tr.coin !== "Algo"
                        ? toast.error(
                            `Sorry the system does not support ${tr.coin} at the Moment, Please Check Back later`
                          )
                        : setStep(2)
                    }
                  >
                    Borrow
                  </button>
                </div>
              </td>
              <td>
                <div>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>
                      tr.coin !== "Algo"
                        ? toast.error(
                            `Sorry the system does not support ${tr.coin}`
                          )
                        : setStep(3)
                    }
                  >
                    Repay
                  </button>
                </div>
              </td>
            </tr>
          ))}
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
