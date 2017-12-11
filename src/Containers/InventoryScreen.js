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

const InventoryScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>InventoryScreen</Text>
  </View>
);

InventoryScreen.navigationOptions = {
  title: 'Home Screen'
};

export default InventoryScreen;
