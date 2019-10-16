import { AppRegistry } from 'react-native';

import '~/config/reactotron';

import App from '~/index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
