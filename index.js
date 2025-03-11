/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './src/assets/screen/login';

AppRegistry.registerComponent(appName, () => login);
