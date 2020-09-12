/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './CameraApp/Container/App';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './ReduxState/Store';
const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
