import React, { createContext, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { create } from 'jss';
import { useTranslation } from 'react-i18next';
import rtl from 'jss-rtl';
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
  createMuiTheme,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './Theme';

const ltrTheme = createMuiTheme({ direction: 'ltr' });
const rtlTheme = createMuiTheme({ direction: 'rtl' });

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
export const LangContext = createContext();
const ProviderWrapper = ({ children, store }) => {
  const { i18n } = useTranslation();
  const [isRtl, setIsRtl] = useState(i18n.language === 'ar');
  useLayoutEffect(() => {
    document.body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  }, [isRtl]);
  return (
    <LangContext.Provider
      value={{
        isRtl,
        setIsRtl,
      }}
    >
      <ThemeProvider theme={isRtl ? rtlTheme : ltrTheme}>
        <StylesProvider jss={jss}>
          <Provider store={store}>
            <BrowserRouter basename="/">
              <>
                <CssBaseline />
                {children}
              </>
            </BrowserRouter>
          </Provider>
        </StylesProvider>
      </ThemeProvider>
    </LangContext.Provider>
  );
};
ProviderWrapper.propTypes = {
  children: PropTypes.shape({}).isRequired,
  store: PropTypes.shape({}).isRequired,
};

export default ProviderWrapper;
