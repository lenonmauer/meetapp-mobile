import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from './styles';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Subscriptions from '~/pages/Subscriptions';
import AuthLoading from '~/pages/AuthLoading';
import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';

const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
  },
  {
    initialRouteName: 'SignIn',
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
            color={focused ? colors.white : colors.regular}
          />
        ),
      },
    },
    Subscription: {
      screen: Subscriptions,
      navigationOptions: {
        tabBarLabel: 'Inscrições',
        tabBarIcon: ({ focused }) => (
          <Icon
            name="tag"
            size={32}
            color={focused ? colors.white : colors.regular}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Meu  Perfil',
        tabBarIcon: ({ focused }) => (
          <Icon
            name="account"
            size={32}
            color={focused ? colors.white : colors.regular}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Dashboard',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.regular,
      style: {
        borderTopColor: colors.transparent,
        backgroundColor: colors.background,
        height: 80,
        paddingVertical: 15,
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
