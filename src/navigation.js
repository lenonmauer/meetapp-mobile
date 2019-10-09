import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Subscription from '~/pages/Subscription';
import AuthLoading from '~/pages/AuthLoading';
import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';

const AuthStack = createStackNavigator(
  { SignIn },
  { SignUp },
  {
    initialRouteName: 'SignIn',
  },
);

const AppStack = createStackNavigator(
  { Dashboard },
  { Profile },
  { Subscription },
  {
    initialRouteName: 'Dashboard',
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
  },
);

export default createAppContainer(MainNav);
