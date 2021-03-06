import React from 'react';
import ReactDOM from 'react-dom';
import LangRouter from 'routes/LangRouter';
// import App from './App';
import './i18n';
import ProviderWrapper from './ProviderWrapper';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProviderWrapper store={store}>
    <LangRouter />
  </ProviderWrapper>,
  document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
