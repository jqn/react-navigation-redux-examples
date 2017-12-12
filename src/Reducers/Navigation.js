import { Platform } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';

import * as types from '../Actions/Types';

import {
  SignedIn,
  SignedOut,
  SignedInInventory
} from '../Containers/StacksOverTabs';

import LoginScreen from '../Containers/LoginScreen';

export const createRootNavigator = (signedIn = false, allowed = false) => {
  if (allowed) {
    return StackNavigator(
      {
        SignedIn: {
          screen: SignedInInventory,
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
  } else {
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
  }
};

export const AppNavigator = createRootNavigator(true, false);

const initialNavState = {
  index: 0,
  routes: [
    {
      key: 'SignedOut',
      routeName: 'SignedOut',
      routes: [{ key: 'LogIn', routeName: 'LogIn' }],
      index: 0
    }
  ]
};

function navigateAction({ routeName, params }) {
  return NavigationActions.navigate({ routeName, params });
}

export const navigationReducer = {
  nav: (state = initialNavState, action) => {
    switch (action.type) {
      case 'Navigation/NAVIGATE':
        return AppNavigator.router.getStateForAction(
          navigateAction({
            routeName: action.routeName,
            params: action.params
          }),
          state
        );
      case types.NAVIGATE_BACK:
        return AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
      case types.NAVIGATE_ROOT: {
        const resetState = {
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'Login',
              params: action.params
            })
          ]
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
