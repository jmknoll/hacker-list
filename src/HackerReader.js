import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: '#831d19',
  navigationBarColor: '#339999',
  navBarBackgroundColor: '#339999',
  navBarTextColor: '#ffffff',
  navBarButtonColor: '#ffffff',
  statusBarTextColorScheme: 'light',
  navBarHidden: false,
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'red'
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'hackerReader.StoriesScreen', // unique ID registered with Navigation.registerScreen
    title: 'New Stories', // title of the screen as appears in the nav bar (optional)
    navigatorStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    //navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});
