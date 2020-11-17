import {Navigation} from 'react-native-navigation';
import App from './src/App';

const APP_ROOT_NAME = 'appRootName';

Navigation.registerComponent(APP_ROOT_NAME, () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
  });
  Navigation.setRoot({
    root: {
      component: {
        name: APP_ROOT_NAME,
      },
    },
  });
});
