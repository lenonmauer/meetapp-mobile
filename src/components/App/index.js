import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import Navigation from './navigation';
import NavigationService from '~/services/navigation';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Navigation
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}

export default App;
