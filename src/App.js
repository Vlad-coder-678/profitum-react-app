import React from 'react';

import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import { servicesData } from './data/servicesData';
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
      <About />
    </LangContext.Provider>
  );
}

export default App;
