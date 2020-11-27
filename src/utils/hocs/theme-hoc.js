import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider} from 'react-native-magnus';
import {defaultTheme} from '../../theme/theme';

export default function withThemeProvider(WrappedComponent) {
  return function Component(props) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaView style={styles.container}>
          <WrappedComponent {...this.props} />
        </SafeAreaView>
      </ThemeProvider>
    );
  };
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
