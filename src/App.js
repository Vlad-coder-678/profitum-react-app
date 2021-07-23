import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Header from "./sections/Header";
import Home from "./pages/Home";
import ResumePage from "./pages/ResumePage";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import Footer from "./sections/Footer";

import { EN } from "./constants";
import { teamData } from "./data/teamData";

export const LangContext = React.createContext();

function App() {
  const [lang, setLang] = React.useState(EN);

  React.useEffect(() => {
    if (window.localStorage.getItem("lang") !== null) {
      setLang(localStorage.getItem("lang"));
    }
  }, []);

  return (
    <LangContext.Provider value={lang}>
      <GlobalStyle />
      <Header setLang={setLang} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {teamData.content.map((item) => (
            <Route
              key={item.route}
              exact
              path={item.route}
              render={() => <ResumePage employee={item} />}
            />
          ))}
          <Route path="/services" component={ServicesPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer lang={lang} />
    </LangContext.Provider>
  );
}

export default App;
