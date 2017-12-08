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
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <TabBarIcon
          focused={focused}
          tintColor={tintColor}
          focusedName="ios-home"
          unfocusedName="ios-home-outline"
        />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <TabBarIcon
          focused={focused}
          tintColor={tintColor}
          focusedName="ios-settings"
          unfocusedName="ios-settings-outline"
        />
      )
    }
  }
};
