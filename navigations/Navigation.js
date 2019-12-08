import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from '../screens/Loading';

const Navigation = createStackNavigator(
    {
        Loading: Loading
    },
    {
        initialRouteName: 'Loading'
    }
) 

export default createAppContainer(Navigation)