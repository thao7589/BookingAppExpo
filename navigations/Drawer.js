import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../navigations/Screens/HomeScreen';
import Home from '../screens/Home'
import Welcome from '../screens/Welcome'
const width = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: width * 0.85,
    // contentComponent: ({ navigation }) => {
	// 	return(<MenuDrawer navigation={navigation} />)
	// }
};

const Drawer = createDrawerNavigator(
    {
        Welcome: {
            screen: Welcome
        },
        Home: {
            screen: Home
        },
    },
    DrawerConfig
);
  
export default createAppContainer(Drawer);