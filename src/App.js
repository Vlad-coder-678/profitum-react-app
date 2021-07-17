import React from 'react';
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Services from "./components/Services";
import AboutCompany from "./components/AboutCompany";
import AboutUs from "./components/AboutUs";
import ResumePage from "./components/ResumePage";
import { servicesData } from "./data/servicesData";
import { teamData } from "./data/teamData";
import { EN } from './constants';

export const LangContext = React.createContext();

function App() {
  const [lang, setLang] = React.useState(EN);

  React.useEffect(() => {
    if (window.localStorage.getItem('lang') !== null) {
      setLang(localStorage.getItem('lang'));
    }
  }, []);

  return (
    <LangContext.Provider value={lang}>
      <GlobalStyle />
      <Header setLang={setLang}/>
      <Services servicesData={servicesData} />
      <AboutCompany />
      <AboutUs />
      {teamData.map((item, index) => (
        <ResumePage key={index} employee={item} />
      ))}
    </LangContext.Provider>
  );
}

export default App;
