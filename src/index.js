import React from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-easy-toast';
import { Provider } from 'react-redux';

import { store } from '~/store/index';

import Navigation from '~/navigation';
import NavigationService from '~/services/navigation';
import ToastService from '~/services/toast';

import { colors } from '~/styles';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <Toast
        ref={toastRef => ToastService.setToast(toastRef)}
        style={{ backgroundColor: colors.primaryDark }}
      />
      <Navigation
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}

export default App;
