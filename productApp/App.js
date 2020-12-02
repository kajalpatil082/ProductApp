import React, { Component } from 'react';

import { Provider } from 'react-redux';

import store from './app/redux/store';

import Route from './app/routes';
import {SafeAreaProvider} from "react-native-safe-area-context";
export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
      <Provider store={store}>

        <Route/>

      </Provider>
      </SafeAreaProvider>
    );
  }
}


