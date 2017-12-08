import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../LoginScreen';
import MainScreen from '../MainScreen';
import SettingsScreen from '../SettingsScreen';

const MainTab = StackNavigator({
  Login: {
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
      title: 'bob'
    })
  }
});

export const AppNavigator = TabNavigator(
  {
    Root: {
      screen: MainTab,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home'
      }
    },
    Profile: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Profile'
      }
    }
  },
  {
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    tabBarOptions: {
      activeTintColor: '#000'
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
);
