import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Subscription from '~/pages/Subscription';
import AuthLoading from '~/pages/AuthLoading';
import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';

const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
  },
  {
    initialRouteName: 'SignUp',
    headerMode: 'none',
  },
);

const AppStack = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: 'Meetups',
        tabBarIcon: ({ focused }) => (
          <Icon
            name="format-list-bulleted"
            size={32}
            color={focused ? '#fff' : '#999'}
          />
        ),
      },
    },
    Subscription: {
      screen: Subscription,
      navigationOptions: {
        tabBarLabel: 'Inscrições',
        tabBarIcon: ({ focused }) => (
          <Icon name="bookmark" size={32} color={focused ? '#fff' : '#999'} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Meu  Perfil',
        tabBarIcon: ({ focused }) => (
          <Icon name="account" size={32} color={focused ? '#fff' : '#999'} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Profile',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#999',
      style: {
        backgroundColor: 'rgba(100,0,0,.91)',
        height: 80,
      },
    },
  },
);

const MainNav = createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
  },
);

export default createAppContainer(MainNav);
