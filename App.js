import React from 'react';
import { View } from 'react-native';

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
// import { AppNavigator } from './src/Reducers/Navigation';

import { AppNavigator } from './src/Reducers/Navigation';
import { isSignedIn } from './src/Auth';

// middleware that logs actions
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

// const Layout = AppNavigator(true, true);

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
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert('An error occurred'));
  }

  render() {
    // const { checkedSignIn, signedIn, allowed } = this.state;
    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    // if (!checkedSignIn) {
    //   return null;
    // }
    // const Layout = createRootNavigator(signedIn, allowed);
    // return <Layout />;
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
