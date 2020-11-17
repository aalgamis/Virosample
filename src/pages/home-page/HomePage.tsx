import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  componentId: string;
  name: string;
}

const HomePage: NavigationFunctionComponent<Props> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>AP home page</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
