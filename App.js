/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {GLView} from 'expo-gl';

const App: () => React$Node = () => (
  <GLView style={{width: 300, height: 500}} />
);

export default App;
