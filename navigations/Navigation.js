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
import SideMenu from '../screens/SideMenu';
import Contact from '../screens/Contact';
import Cart from '../screens/Cart';
import Entertainment from '../screens/Entertainment';
import NightLife from '../screens/NightLife';
import PostDetail from '../screens/PostDetail';

const Navigation = createStackNavigator(
    {
        Loading: Loading,
        Welcome: Welcome,
        Login: Login,
        SignUp: SignUp,
        ChangeInfo: ChangeInfo,
        OrderHistory: OrderHistory,
        Home: Home,
        SideMenu: SideMenu,
        Contact: Contact,
        Cart: Cart,
        Entertainment: Entertainment,
        NightLife: NightLife,
        PostDetail: PostDetail
    },
    {
        initialRouteName: 'Loading'
    }
); 

export default createAppContainer(Navigation);