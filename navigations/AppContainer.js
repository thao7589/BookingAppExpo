import React from 'react';
import { View, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Text, List, ListItem, Badge } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Welcome from '../screens/Welcome';
import Home from '../screens/pages/Home';
import PostDetail from '../screens/pages/PostDetail';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import Cart from '../screens/pages/Cart';
import SideMenu from '../screens/menu/SideMenu';


const navOptionHandler = {
    header: null
}

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: navOptionHandler
        },
        PostDetail: {
            screen: PostDetail,
            navigationOptions: navOptionHandler
        }
    }
)

const MainTab = createBottomTabNavigator({
  Home: HomeStack,
  Cart: Cart,
});

const MainStack = createStackNavigator({
    Home: {
        screen: MainTab,
        navigationOptions: navOptionHandler
    }
}, { initialRouteName: 'Home' })

const appDrawer = createDrawerNavigator(
    {
        drawer: MainStack
    },
    {
        contentComponent: SideMenu,
        drawerWidth: Dimensions.get('window').width * 0.75
    }
)

const authStack = createStackNavigator(
    {
        Welcome: {
            screen: Welcome,
            navigationOptions: navOptionHandler
        },
        Login: {
            screen: Login,
            navigationOptions: navOptionHandler
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: navOptionHandler
        }
    }
)

const MainApp = createSwitchNavigator(
    {
        app: appDrawer,
        auth: authStack
    },
    {
        initialRouteName: 'auth'
    }
)

export default createAppContainer(MainApp);