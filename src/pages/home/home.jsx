import React from "react";
import MainNav from "../../components/widgets/main-nav";
import "./home.css";
import MobileNav from "./mobile-nav";
import Particles from "react-tsparticles";
import particlesConfig from "../../assets/particlesConfig.json";
export default function Home() {
  const [mobileNav, setMobileNav] = React.useState(false);
  return (
    <>
      {mobileNav && (
        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      )}
      <section className="home-main" id="particles-js">
        
        <MainNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
        <div className="main-home-content container">
          <div>
            <div>
              <h2 className="mb-3">Welcome to AlgoDeFinance</h2>
            </div>
            <div className="mb-3">
              <p className="line-big">
              The Multiasset future with liquidity fragmentation has arrived.
                AlgoDeFinance is building a DeFi liquidity protocol with support for multiple Algorand Standard Assets and let users lend, borrow various ASAs
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
