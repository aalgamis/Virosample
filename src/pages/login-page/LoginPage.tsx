import React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  componentId: string;
  name: string;
}

const LoginPage: NavigationFunctionComponent<Props> = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default LoginPage;
