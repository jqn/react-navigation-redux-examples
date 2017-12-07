import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../Actions';

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
        onPress={() => {
          navigation.dispatch({
            type: 'Navigation/NAVIGATE',
            screen: 'Main',
            params: { loggedIn: true }
          });
        }}
      />
    </Card>
  </View>
);

function mapStateToProps(state) {
  console.log('state', state);
  return {
    authorized: state.authorized,
    deviceDimensions: state.deviceDimensions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
