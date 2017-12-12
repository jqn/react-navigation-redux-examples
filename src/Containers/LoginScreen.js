import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn, onSignOut } from '../Auth';
import { createRootNavigator } from './StacksOverTabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Card title="SIGN IN">
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        // onPress={() => {
        //   navigation.dispatch({
        //     type: 'Navigation/NAVIGATE',
        //     routeName: 'Main'
        //   });
        // }}
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'));
          // createRootNavigator(true, true);
        }}
      />
      <Button
        onPress={() => onSignOut().then(() => console.log('signed out'))}
        title="SIGN OUT"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </Card>
  </View>
);

LoginScreen.navigationOptions = {
  title: 'Home Screen'
};

export default LoginScreen;
