import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../LoginScreen';
import MainScreen from '../MainScreen';
import SettingsScreen from '../SettingsScreen';

const MainTab = StackNavigator({
  Home: {
    screen: LoginScreen,
    path: '/',
    navigationOptions: {
      title: 'Welcome'
    }
  },
  Main: {
    screen: MainScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => ({
      title: 'Main'
    })
  }
});

export const TabNav = {
  Root: {
    screen: MainTab,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings'
    }
  }
};
