import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
import { CssBaseline } from "@material-ui/core";


const ProviderWrapper = ({ children, store }) => (
    <Provider store={store}>
      <BrowserRouter basename="/NewProject">
        <ThemeProvider theme={theme}>
          <>
            <CssBaseline />
            {children}
          </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
);

ProviderWrapper.prototype = {
  children: PropTypes.shape({}).isRequired,
  store: PropTypes.shape({}).isRequired,
};

export default ProviderWrapper;
