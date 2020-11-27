import {Navigation} from 'react-native-navigation';
import PagesEnum from '../enums/PagesEnum';
import {Provider} from 'react-redux';
import {RootState} from '../store';
import withThemeProvider from '../utils/hocs/theme-hoc';

export const registerPages = (provider: Provider, store: RootState) => {
  Object.values(PagesEnum).forEach(page =>
    Navigation.registerComponentWithRedux(
      page.name,
      () => withThemeProvider(page.getComponentClassFunc),
      provider,
      store,
    ),
  );
};

export const onBoardingNavigation = () => {
  return Navigation.setRoot({
    root: {
      component: {
        name: PagesEnum.ONBOARDING.name,
      },
    },
  });
};

export const authNavigation = () => {
  return Navigation.setRoot({
    root: {
      component: {
        name: PagesEnum.LOGIN.name,
      },
    },
  });
};

export const mainNavigation = () => {
  return Navigation.setRoot({
    root: {
      component: {
        name: PagesEnum.HOME.name,
      },
    },
  });
};
