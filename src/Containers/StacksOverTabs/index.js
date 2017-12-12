import React from 'react';
import { Platform, StatusBar } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from '../LoginScreen';
import MainScreen from '../MainScreen';
import InventoryScreen from '../InventoryScreen';
import SettingsScreen from '../SettingsScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
  LogIn: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Sign In',
      headerStyle
    }
  }
});

export const SignedIn = TabNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const SignedInInventory = TabNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    Inventory: {
      screen: InventoryScreen,
      navigationOptions: {
        tabBarLabel: 'Inventory',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="book" size={30} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="cog" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }
    }
  }
);

// export const createRootNavigator = (signedIn = false, allowed = false) => {
//   if (allowed) {
//     return StackNavigator(
//       {
//         SignedIn: {
//           screen: SignedInInventory,
//           navigationOptions: {
//             gesturesEnabled: false
//           }
//         },
//         SignedOut: {
//           screen: SignedOut,
//           navigationOptions: {
//             gesturesEnabled: false
//           }
//         }
//       },
//       {
//         headerMode: 'none',
//         mode: 'modal',
//         initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
//       }
//     );
//   } else {
//     return StackNavigator(
//       {
//         SignedIn: {
//           screen: SignedIn,
//           navigationOptions: {
//             gesturesEnabled: false
//           }
//         },
//         SignedOut: {
//           screen: SignedOut,
//           navigationOptions: {
//             gesturesEnabled: false
//           }
//         }
//       },
//       {
//         headerMode: 'none',
//         mode: 'modal',
//         initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
//       }
//     );
//   }
// };
