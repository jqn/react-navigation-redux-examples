import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../LoginScreen';
import MainScreen from '../MainScreen';

export function getStack() {
  const screens = {
    Root: {
      screen: LoginScreen,
      path: '/'
    },
    Home: {
      screen: MainScreen,
      path: '/index'
    }
  };
  return screens;
}

export const Stacks = getStack();
