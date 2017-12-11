import React from 'react';
import { View } from 'react-native';
import { createRootNavigator } from './src/Containers/Stacks';
import { isSignedIn } from './src/Auth';

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
    const { checkedSignIn, signedIn, allowed } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn, allowed);
    return <Layout />;
  }
}
