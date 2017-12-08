import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

const SettingsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>SettingsScreen</Text>
  </View>
);

SettingsScreen.navigationOptions = {
  title: 'Home Screen'
};

export default SettingsScreen;
