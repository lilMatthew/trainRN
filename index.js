/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './src/assets/screen/login';
import loginTwo from './src/assets/screen/loginTwo';
import welcomeLogin from './src/assets/screen/welcomeLogin';
import welcomeInput from './src/assets/screen/welcomeInput';
import phoneNumberInput from './src/assets/screen/phoneNumberInput';
import phoneinput from './src/assets/helper/phoneinput';
import signupSuccess from './src/assets/screen/signupSuccess';
import splashScreen from './src/assets/screen/splashScreen';
import birthdayScreen from './src/assets/screen/birthdayScreen';
import signupTestHook from './src/assets/screen/signinTestHook';
import signinTestHook from './src/assets/screen/signinTestHook';
import MobxScreenTest from './src/assets/screen/mobxScreen';

AppRegistry.registerComponent(appName, () => MobxScreenTest);
