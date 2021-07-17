import React from "react";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Services from "./components/Services";
import AboutCompany from "./components/AboutCompany";
import AboutUs from "./components/AboutUs";
import ResumePage from "./components/ResumePage";

import { servicesData } from "./data/servicesData";
import { teamData } from "./data/teamData";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Services servicesData={servicesData} />
      <AboutCompany />
      <AboutUs />
      {teamData.map((item, index) => (
        <ResumePage key={index} employee={item} />
      ))}
    </>
  );
}

export default App;
