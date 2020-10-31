import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import FirstPage from 'components/pages/FirstPage';
import SecPage from 'components/pages/SecPage';
import pages from './routes';


const App = (props) => {
  let { locale, setLocale, setIsRtl } = props;
  const urlLocale = props.location.pathname.substring(1, 3);
  if (locale !== urlLocale) {
    setLocale(urlLocale);
    locale = urlLocale;
  }
  
  return (
  // <Router history={history}>
    <Switch>
      {pages.map((page, index) => (
        <Route
          key={index}
          exact={page.exact}
          path={`/${locale}/${page.path}`}
          render={(props) => (
            <page.layout history={props.history} >
              <page.component {...props} setIsRtl={setIsRtl}/>
              {/* <h1>dass</h1> */}
            </page.layout>
          )}
        />
      ))} 
    </Switch>
  // </Router>
  );
};
export default App;
