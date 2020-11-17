import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import ReduxLogger from '../utils/redux-logger';

import appReducer from './reducers/app-reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const PURGE_STORAGE = false;

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  app: appReducer,
});

const persistConfig = {
  keyPrefix: '',
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  timeout: 0,
  whitelist: ['app', 'chronometer'],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ReduxLogger.storeLogger()];
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);

  PURGE_STORAGE && persistor.purge();

  return {store, persistor};
};
