import React from 'react';
import { View, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Text, List, ListItem, Badge } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { submitLogout } from '../actions/index';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import PostDetail from '../screens/PostDetail';
import Cart from '../screens/Cart';

class SideMenu extends React.Component {
    onLogout = () => {
        this.props.submitLogout();
        this.props.navigation.navigate('Welcome');
    }

    render() {
        return(
            <SafeAreaView style={{flex: 1, paddingTop: 20}}>
                <ScrollView>
                    <List>
                        <ListItem onPress={ () => this.props.navigation.navigate('Home') }>
                            <Text>Home</Text>
                        </ListItem>
                        <ListItem onPress={ () => this.props.navigation.navigate('Home') }>
                            <Text>Entertainment</Text>
                        </ListItem>
                        <ListItem onPress={ () => this.props.navigation.navigate('Home') }>
                            <Text>Night Life</Text>
                        </ListItem>
                        <ListItem onPress={ () => this.props.navigation.navigate('Cart') }>
                            {this.props.cart.count > 0 && <Badge style={{ position: 'absolute' }}><Text>{this.props.cart.count}</Text></Badge>}
                            <Text>Cart</Text>
                        </ListItem>
                        <ListItem onPress={ () => this.props.navigation.navigate('SignUp') }>
                            <Text>Account</Text>
                        </ListItem>
                    </List>
                </ScrollView>
                <List>
                    {this.props.logined ?(
                        <ListItem onPress={ this.onLogout }>
                            <Text>Logout</Text>
                        </ListItem>
                        ) : (
                            <ListItem onPress={ () => this.props.navigation.navigate('Login') }>
                                <Text>Login</Text>
                            </ListItem>
                        )
                    }
                </List>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.booking.cart,
    logined: state.booking.user.logined
  })
  
let SideMenuConnect =  connect( mapStateToProps, { submitLogout })(SideMenu);

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
        contentComponent: SideMenuConnect,
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