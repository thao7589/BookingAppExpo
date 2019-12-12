import React from 'react';
import Navigation from './navigations/Navigation';
import AppContainer from './navigations/AppContainer';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <Provider store={ store }>
      <AppContainer />
    </Provider>
  )
};
