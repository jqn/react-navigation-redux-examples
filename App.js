import React from 'react';
import { Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import { bindActionCreators } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { NavigationActions } from 'react-navigation';
import { addNavigationHelpers } from 'react-navigation';

import { ActionCreators } from './src/Actions';
import reducer from './src/Reducers';

import { isSignedIn, onSignIn } from './src/Auth';

import {
  tempRootNavigator,
  createRootNavigator
} from './src/Containers/StacksOverTabs';
const allowed = false;

export var AppNavigator = tempRootNavigator(false, false);

isSignedIn()
  .then(res => {
    allowed = res;
  })
  .catch(err => alert('An error occurred'));

// middleware that logs actions
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState) {
  console.log('initialState', initialState);
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const AppWithNavigationState = connect(state => ({
  nav: state.nav
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      allowed: false
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: res }))
      .catch(err => alert('An error occurred'));
  }

  render() {
    if (!this.state.checkedSignIn) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text
            onPress={() => {
              onSignIn().then(() => console.log('signed in'));
              this.setState({ checkedSignIn: true });
              createRootNavigator(true, true);
            }}
          >
            Login
          </Text>
        </View>
      );
    }
    console.log('returning component', this.state.checkedSignIn);
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
