import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "../../pages/home/home";
import MainRouter from "../../routes";
import "../../vendor/css/style.css";
import { Navbar } from "../widgets/navbar";
import Sidebar from "../widgets/sidebar/sidebar";
import { MainContent, Wrapper } from "./containers/";
import Particles from "react-tsparticles";
import particlesConfig from "../../assets/appParticlesConfig.json";
export function Layout() {
  const location = useLocation();

  const currentRoute = location.pathname.split("/")[1];
  const [routeParams, setRouteParams] = useState(currentRoute);

  useEffect(() => {
    if (location.pathname == "/") {
      setRouteParams("Dashboard");
    } else {
      setRouteParams(location.pathname.split("/")[1]);
    }
  }, [location, routeParams]);

  const xPage =
    location.pathname.split("/")[1] == "home" ? (
      <Home />
    ) : (
      <div id="wrapper">
        <Particles params={particlesConfig} />
        <Sidebar />
        <Wrapper>
          <Navbar />
          <MainContent routeHeader={routeParams}>
            <MainRouter />
          </MainContent>
        </Wrapper>
      </div>
    );
  return <>
  {xPage}
  </>;
}
