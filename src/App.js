import React from "react";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";

import { servicesData } from "./data/servicesData";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Services servicesData={servicesData} />
      <About />
    </>
  );
}

export default App;
