import OnBoardingPage from '../pages/on-boarding-page/OnBoardingPage';
import LoginPage from '../pages/login-page/LoginPage';
import HomePage from '../pages/home-page/HomePage';

export default {
  ONBOARDING: {
    name: 'OnBoardingPage',
    getComponentClassFunc: OnBoardingPage,
  },
  LOGIN: {
    name: 'LoginPage',
    getComponentClassFunc: LoginPage,
  },
  HOME: {
    name: 'HomePage',
    getComponentClassFunc: HomePage,
  },
};
