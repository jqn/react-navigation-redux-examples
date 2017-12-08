import { Platform } from 'react-native';
import {
  NavigationActions,
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import LoginScreen from '../Containers/LoginScreen';
import MainScreen from '../Containers/MainScreen';
import SettingsScreen from '../Containers/SettingsScreen';

import * as types from '../Actions/Types';
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
      title: 'bob'
    })
  }
});

export const AppNavigator = TabNavigator(
  {
    Root: {
      screen: LoginScreen,
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

const initialNavState = {
  index: 0,
  routes: [
    {
      key: 'Root',
      routeName: 'Root',
      routes: [{ key: 'Home', routeName: 'Home' }],
      index: 0
    },
    {
      key: 'Profile',
      routeName: 'Settings'
    }
  ]
};

function navigateAction({ routeName, id }) {
  return NavigationActions.navigate({ routeName, params: { id } });
}

export const navigationReducer = {
  nav: (state = initialNavState, action) => {
    switch (action.type) {
      case 'Navigation/NAVIGATE':
        return AppNavigator.router.getStateForAction(
          navigateAction(action),
          state
        );
      case types.NAVIGATE_BACK:
        return AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
      case types.NAVIGATE_HOME: {
        const resetState = {
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Root' })]
        };
        return AppNavigator.router.getStateForAction(
          NavigationActions.reset(resetState),
          state
        );
      }
      default:
        return state;
    }
  }
};
