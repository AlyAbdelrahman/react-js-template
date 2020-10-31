// import i18next from 'i18next';

// const direction = i18next.dir();
const direction = document.documentElement.lang === 'en' ? 'ltr' : 'rtl';
const left = direction === 'ltr' ? 'left' : 'right';
const right = direction === 'rtl' ? 'right' : 'left';
const Globals = {
  left,
  right,
  direction,
  marginLeft: `margin-${left}`,
  marginRight: `margin-${right}`,
  paddingRight: `padding-${right}`,
  paddingLeft: `padding-${left}`,
};
export default Globals;
