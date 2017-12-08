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

export const SignedIn = TabNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        tabBarLabel: 'Main',
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
      path: '/',
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
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

export const SignedOut = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};
