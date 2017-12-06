/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View } from 'react-native';

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
import { AppNavigator } from './src/Reducers/Navigation';

// middleware that logs actions
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const AppWithNavigationState = connect(state => ({
  nav: state.nav
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
