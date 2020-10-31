import React, { Component } from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import history from './history';
import App from '../App';

class LangRouter extends Component {
  constructor(props) {
    super(props);

    let locale = window.localStorage.getItem('locale');
    if (locale === null) {
      window.localStorage.setItem('locale', 'en');
      locale = 'ar';
    }
    this.state = {
      locale,
    };
  }

  setLocale = (newLocale) => {
    console.log('newLocale = ', newLocale);
    window.localStorage.setItem('locale', newLocale);
    this.setState({ locale: newLocale });
  };

  render() {
    const { locale } = this.state;
    return (
    //   <Router history={history}>
        <Switch>
          <Route
            path="/"
            exact
            render={(propRouter) => <Redirect to={`${locale}/`} />}
          />
          <Route
            path="/en/*"
            render={(propsRouter) => (
              <App
                {...propsRouter}
                locale={locale}
                setLocale={this.setLocale}
              />
            )}
          />
          <Route
            path="/ar/*"
            render={(propsRouter) => (
              <App
                {...propsRouter}
                locale={locale}
                setLocale={this.setLocale}
              />
            )}
          />
          <Route
            path="*"
            render={(propsRouter) => (
            //   <NoFound
            //     {...propsRouter}
            //     locale={locale}
            //     setLocale={this.setLocale}
            //   />
            <h1>not found</h1>
            )}
          />
        </Switch>
    //   </Router>
    );
  }
}
export default LangRouter;
