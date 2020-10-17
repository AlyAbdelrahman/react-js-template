import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import pages from "./routes";
import history from './routes/history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        {pages.map((page, index) => (
          <Route
            key={index}
            exact={page.exact}
            path={page.path}
            render={(props) => (
              <page.layout history={props.history}>
                <page.component {...props} />
              </page.layout>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
