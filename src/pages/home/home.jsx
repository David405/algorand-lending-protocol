import React from "react";
import MainNav from "../../components/widgets/main-nav";
import "./home.css";
import MobileNav from "./mobile-nav";
export default function Home() {
  const [mobileNav, setMobileNav] = React.useState(false);
  return (
    <>
      {mobileNav && (
        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      )}

      <section className="home-main">
        <MainNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
        <div className="main-home-content container">
          <div>
            <div>
              <h2 className="mb-3">Welcome to Alglend</h2>
            </div>
            <div className="mb-3">
              <p>
                The multichain future with liquidity fragmentation has arrived.
                Alglend is building a DeFi liquidity protocol with full
                crosschain compatibility to merge the liquidity across all
                chains and let users lend and borrow on various chains
                simultaneously.
              </p>
            </div>
            <div>
              <button className="btn btn-primary">Launch App</button>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
