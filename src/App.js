import React from "react";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Services from "./components/Services";
import AboutCompany from "./components/AboutCompany";
import AboutUs from "./components/AboutUs";

import { servicesData } from "./data/servicesData";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Services servicesData={servicesData} />
      <AboutCompany />
      <AboutUs />
    </>
  );
}

export default App;
