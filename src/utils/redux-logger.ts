import {createLogger} from 'redux-logger';

export default class ReduxLogger {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  static log(...args: any[]) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }

  static storeLogger() {
    return createLogger({
      predicate: () => process.env.NODE_ENV === 'development',
      collapsed: true,
      duration: true,
    });
  }
}
