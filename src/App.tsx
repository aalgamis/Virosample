import React, {FC, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import createStore, {RootState} from './store';
import {
  registerPages,
  // mainNavigation,
  authNavigation,
  onBoardingNavigation,
} from './navigation';
import colors from './theme/colors';

const {store, persistor} = createStore();

// @ts-ignore let's ignore this error for now
registerPages(Provider, store);

const FullPageLoader: FC = () => {
  return (
    <View style={styles.storeLoaderContainer}>
      <ActivityIndicator />
    </View>
  );
};

const NavigationLoader: FC = () => {
  const isOnBoardingHasBeenSeen = useSelector(
    (appStore: RootState) => appStore.app.isOnBoardingHasBeenSeen,
  );

  useEffect(() => {
    isOnBoardingHasBeenSeen ? authNavigation() : onBoardingNavigation();
  }, [isOnBoardingHasBeenSeen]);

  return <FullPageLoader />;
};

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<FullPageLoader />} persistor={persistor}>
        <NavigationLoader />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  storeLoaderContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
