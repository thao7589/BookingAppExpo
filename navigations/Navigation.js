import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from '../screens/Loading';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ChangeInfo from '../screens/ChangeInfo';
import OrderHistory from '../screens/OrderHistory';
import Home from '../screens/Home';

const Navigation = createStackNavigator(
    {
        Loading: Loading,
        Welcome: Welcome,
        Login: Login,
        SignUp: SignUp,
        ChangeInfo: ChangeInfo,
        OrderHistory: OrderHistory,
        Home: Home
    },
    {
        initialRouteName: 'Home'
    }
); 

export default createAppContainer(Navigation);