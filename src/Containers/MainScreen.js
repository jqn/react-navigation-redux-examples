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

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>MainScreen</Text>
    <Button
      onPress={() =>
        navigation.dispatch({
          type: 'NAVIGATE_BACK',
          dispatch: 'goback'
        })}
      title="Go Back"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen'
};

export default MainScreen;
