import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import Drawer from '../navigations/Drawer'

const AppStack = createStackNavigator({
    App: Drawer
}, {
    navigationOptions: {
        header: null
    }
});

export default createAppContainer(Drawer);