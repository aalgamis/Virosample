import React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  componentId: string;
  name: string;
}

const OnBoardingPage: NavigationFunctionComponent<Props> = () => {
  return (
    <View>
      <Text>OnBoarding</Text>
    </View>
  );
};

export default OnBoardingPage;
