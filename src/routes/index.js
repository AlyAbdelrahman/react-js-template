import FirstPage from 'components/pages/FirstPage';
import SecPage from 'components/pages/SecPage';
import DashBoard from 'components/layouts/DashBoard';
import { LOGIN, DASHBOARD } from './paths';

const pages = [
  {
    exact: true,
    path: '',
    component: FirstPage,
    layout: DashBoard,
  },
  {
    exact: true,
    path: LOGIN,
    component: FirstPage,
    layout: DashBoard,
  },
  {
    exact: true,
    path: 'dashboard',
    component: SecPage,
    layout: DashBoard,
  },
];

export default pages;
