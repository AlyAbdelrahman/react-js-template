import i18n from '../i18n';

const baseRouteUrl = '/:locale(en|ar)?';
export const baseUrl = i18n.language === 'en' ? '' : `/${i18n.language}`;
const LOGIN = '/';
const DASHBOARD = 'dashboard';

export {
  LOGIN,
  DASHBOARD,
};
