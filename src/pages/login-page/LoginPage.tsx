import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  componentId: string;
  name: string;
}

const LoginPage: NavigationFunctionComponent<Props> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
