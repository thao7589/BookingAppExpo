import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomePage from '../screens/Home';

const Width = Dimensions.get('window').width;

const Drawer = createDrawerNavigator({
    Home: HomePage
}); 

export default createAppContainer(Drawer); 