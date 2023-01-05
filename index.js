/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AuthScreens from './src/navigation/auth';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AuthScreens);
