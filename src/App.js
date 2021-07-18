import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import ResumePage from './pages/ResumePage';
import { teamData } from './data/teamData';
import { EN } from './constants';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

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
      <Header setLang={setLang} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {teamData.map((item) => (
            <Route
              key={item.route}
              exact
              path={item.route}
              render={() => <ResumePage employee={item} />}
            />
          ))}

          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </LangContext.Provider>
  );
}

export default App;
