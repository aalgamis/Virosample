import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  componentId: string;
  name: string;
}

const OnBoardingPage: NavigationFunctionComponent<Props> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>OnBoarding</Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingPage;
