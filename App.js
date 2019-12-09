import React from 'react';
import Navigation from './navigations/Navigation';
import Drawer from './navigations/Drawer';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <Provider store={ store }>
      <Drawer />
      <Navigation />
    </Provider>
  )
};
