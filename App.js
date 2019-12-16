import React, {useState} from 'react';
import AppContainer from './navigations/AppContainer';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <Provider store={ store }>
      <AppContainer />
    </Provider>
  )
};
