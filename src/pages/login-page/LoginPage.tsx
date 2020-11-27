import React from 'react';
import {Button, Div, Input, Text, Snackbar, Icon} from 'react-native-magnus';
import {Formik} from 'formik';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {mainNavigation} from '../../navigation';

interface Props {
  componentId: string;
  name: string;
}

// interface FormValues {
//   user: string;
//   password: string;
// }

const snackbarRef = React.createRef();

const LoginPage: NavigationFunctionComponent<Props> = () => {
  const handleLogin = (/* {user, password}: FormValues */) => {
    // TODO: make API call to sign-in

    // if (user === 'Stepan' && password === '123123') {
    mainNavigation();
    // } else {
    //   if (snackbarRef.current) {
    //     snackbarRef.current.show();
    //   }
    // }
  };

  return (
    <Div flex={1}>
      <Div p="xl" flex={1}>
        <Div flex={1}>
          <Text fontSize="2xl">Login</Text>
        </Div>
        <Div flex={10}>
          <Formik
            initialValues={{
              user: '',
              password: '',
            }}
            onSubmit={handleLogin}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <Div flex={2}>
                <Div>
                  <Input
                    // @ts-ignore
                    name="uaer"
                    mt="xl"
                    placeholder="Username"
                    value={values.user}
                    onChangeText={handleChange('user')}
                    onBlur={handleBlur('user')}
                  />
                  <Input
                    // @ts-ignore
                    name="password"
                    mt="xl"
                    secureTextEntry
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                </Div>
                {/* @ts-ignore */}
                <Button block mt="xl" onPress={handleSubmit}>
                  Login
                </Button>
              </Div>
            )}
          </Formik>
        </Div>
      </Div>
      <Snackbar
        suffix={
          <Icon
            name="error-outline"
            fontSize="xl"
            fontFamily="MaterialIcons"
            color="white"
          />
        }
        onDismiss={() => {}}
        ref={snackbarRef}
        bg="red700"
        color="white"
        duration={2000}>
        Error. User or password are incorrect
      </Snackbar>
    </Div>
  );
};

export default LoginPage;
