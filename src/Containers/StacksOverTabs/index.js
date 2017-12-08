import React from 'react';
import { Platform, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../LoginScreen';
import MainScreen from '../MainScreen';
import SettingsScreen from '../SettingsScreen';

import PropTypes from 'prop-types';

import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarIcon = props => (
  <Ionicons
    name={props.focused ? props.focusedName : props.unfocusedName}
    size={26}
    style={{ color: props.tintColor }}
  />
);

TabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  focusedName: PropTypes.string.isRequired,
  unfocusedName: PropTypes.string.isRequired,
  tintColor: PropTypes.string.isRequired
};

const MainTab = TabNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      tabBarLabel: 'Main'
    }
  },
  Settings: {
    screen: SettingsScreen,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Settings'
    }
  }
});

export const StacksOverTabs = {
  Root: {
    screen: MainTab,
    path: '/',
    navigationOptions: {
      tabBarVisible: false,
      gesturesEnabled: false
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
};