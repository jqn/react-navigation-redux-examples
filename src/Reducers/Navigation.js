import { Platform } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';

import { Stacks } from '../Containers/Stacks';

import * as types from '../Actions/Types';

export const AppNavigator = StackNavigator(Stacks, {
  initialRouteName: 'Root',
  headerMode: 'screen',
  mode: Platform.OS === 'ios' ? 'modal' : 'card'
});

const initialNavState = {
  index: 0,
  routes: [
    {
      key: 'Root',
      routeName: 'Root',
      params: {
        id: 0
      }
    }
  ]
};

function navigateAction({ routeName, params }) {
  return NavigationActions.navigate({ routeName, params: { params } });
}

export const navigationReducer = {
  nav: (state = initialNavState, action) => {
    let _dispatch = null;
    switch (action.type) {
      case 'Navigation/NAVIGATE':
        return AppNavigator.router.getStateForAction(
          navigateAction(action),
          state
        );
      case types.NAVIGATE_BACK:
        return AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state,
          _dispatch
        );
      case types.NAVIGATE_HOME: {
        const arg = action;
        const resetState = {
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: arg.route,
              params: { title: arg.title }
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
