import { Platform } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';

import * as types from '../Actions/Types';

import { createRootNavigator } from '../Containers/StacksOverTabs';

export const AppNavigator = StackNavigator(createRootNavigator, {
  mode: Platform.OS === 'ios' ? 'modal' : 'card'
});

const initialNavState = {
  index: 0,
  routes: [
    {
      key: 'Login',
      routeName: 'Login'
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
