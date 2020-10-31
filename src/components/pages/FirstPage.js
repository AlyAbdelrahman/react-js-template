import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { LangContext } from '../../ProviderWrapper';
import Globals from '../../constants/Globals';

const useStyles = makeStyles({
  langTextContainer: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    [Globals.marginLeft]: '80rem',
  },
});

export default function FirstPage(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const Lang = useContext(LangContext);
  const changeLanguage = (event) => {
    // const cssDir = document.getElementById('style-direction');
    // if (cssDir.getAttribute('href')==='rtl.css'){
    //   cssDir.setAttribute('href', 'ltr.css');
    // }else {
    //   cssDir.setAttribute('href', 'rtl.css');
    // }

    i18n.changeLanguage(event.target.value, (err, t) => {
      const { locale, setIsRtl } = props;
      const url = `/${event.target.value}${window.location.pathname.substring(3)}`;
      props.history.push(url);
      document.documentElement.lang = event.target.value;
      Lang.setIsRtl((oldV) => !oldV);
    });
  };

  return (
    <>
      <h1>{t('hello')}</h1>
      <div onChange={changeLanguage} className={classes.langTextContainer}>
        <input type="radio" value="en" name="language" />
        {' '}
        English
        <input type="radio" value="ar" name="language" />
        arabic
      </div>
      <Link to={`/${i18n.language}/dashboard`}>Home</Link>
    </>
  );
}
