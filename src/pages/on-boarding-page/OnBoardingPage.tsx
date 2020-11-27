import React from 'react';
import {Button, Div, Icon, Text} from 'react-native-magnus';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useDispatch} from 'react-redux';

import {authNavigation} from '../../navigation';
import {onBoardingHasBeenSeen} from '../../store/actions/app-actions-creator';

interface Props {
  componentId: string;
  name: string;
}

const OnBoardingPage: NavigationFunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const handleSkipOnboarding = () => {
    dispatch(onBoardingHasBeenSeen());
    authNavigation();
  };

  return (
    <Div p="xl">
      <Div row>
        <Text>This is the Onboarding page</Text>
      </Div>
      <Button
        onPress={handleSkipOnboarding}
        block
        suffix={
          <Icon position="absolute" right={8} name="arrowright" color="white" />
        }
        bg="blue600"
        p={12}
        color="white"
        rounded="circle"
        mt="lg">
        Skip
      </Button>
    </Div>
  );
};

export default OnBoardingPage;
