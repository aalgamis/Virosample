import React from 'react';
import {View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {Text} from 'react-native-magnus';

interface Props {
  componentId: string;
  name: string;
}

const HomePage: NavigationFunctionComponent<Props> = () => {
  return (
    <View>
      <Text
        fontSize="lg"
        fontWeight="bold"
        textTransform="uppercase"
        color="red400"
        letterSpacing={2}
        mt="lg">
        AP home page
      </Text>
    </View>
  );
};

export default HomePage;
