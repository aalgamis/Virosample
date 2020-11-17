import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'react-native-magnus';

export default function withThemeProvider(WrappedComponent) {
  return function Component(props) {
    return (
      <ThemeProvider>
        <SafeAreaView>
          <WrappedComponent {...this.props} />
        </SafeAreaView>
      </ThemeProvider>
    );
  };
}
