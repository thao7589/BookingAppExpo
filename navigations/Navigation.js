import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from '../screens/Loading';
import Welcome from '../screens/Welcome';
import Login from '../containers/loginContainer';
import SignUp from '../screens/SignUp';

const Navigation = createStackNavigator(
    {
        Loading: Loading,
        Welcome: Welcome,
        Login: Login,
        SignUp: SignUp
    },
    {
        initialRouteName: 'Loading'
    }
) 

export default createAppContainer(Navigation)