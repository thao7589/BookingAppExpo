import React from 'react';
import { View, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Text, List, ListItem } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

class CustomHeader extends React.Component {
    state = {
        loading: true
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ loading: false })  
    }
    render() {
        if (this.state.loading) {
            return (
              <View></View>
            );
        }
        let {title, isHome} = this.props
        return(
            <Header>
                <Left>
                    { isHome ?
                    <Button transparent onPress={ () => this.props.navigation.openDrawer() }>
                        <Icon name='menu' />
                    </Button> :
                    <Button transparent onPress={ () => this.props.navigation.goBack() }>
                        <Icon name='arrow-back' />
                    </Button>
                    }
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
            </Header>
        )
    }
}

class HomeScreen extends React.Component {
    state = {
        loading: true
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ loading: false })  
    }

    render() {
        if(this.state.loading) {
            return(
                <View></View>
            )
        } 
        return (
        <View style={{ flex: 1}}>
            <CustomHeader title='Home' isHome={true} navigation={this.props.navigation}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button light onPress={ () => this.props.navigation.navigate('HomeDetail')}>
                    <Text>Go to Home</Text>
                </Button>
            </View>
        </View>
        );
    }
} 

class HomeScreenDetail extends React.Component {
    render() { 
        return (
        <View style={{ flex: 1}}>
            <CustomHeader title="Home Detail" navigation={ this.props.navigation }/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Detail!</Text>
            </View>
        </View>
        );
    }
} 

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button light onPress={ () => this.props.navigation.navigate('SettingDetail')}>
                <Text>Go to Setting</Text>
            </Button>
      </View>
    );
  }
}

class SettingDetail extends React.Component {
    render() { 
      return (
        <View style={{ flex: 1}}>
          <CustomHeader navigation={ this.props.navigation }/>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Setting Detail</Text>
          </View>
        </View>
      );
    }
} 

class Search extends React.Component {
    render() { 
        return (
            <View style={{ flex: 1}}>
            <CustomHeader title="Search" navigation={ this.props.navigation } />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Search</Text>
            </View>
            </View>
        );
    }
}

class Profile extends React.Component {
    render() { 
        return (
            <View style={{ flex: 1}}>
            <CustomHeader title="Profile" navigation={ this.props.navigation } />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile</Text>
            </View>
            </View>
        );
    }
} 

class Login extends React.Component {
    state = {
        loading: true
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ loading: false })  
    }
    render() {
        if (this.state.loading) {
            return (
              <View></View>
            );
        }
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login screen</Text>
                <Button light style={{margin: 10}} onPress={ () => this.props.navigation.navigate('app') }>
                    <Text>Login</Text>
                </Button>
                <Button light style={{margin: 10}} onPress={ () => this.props.navigation.navigate('Register') }>
                    <Text>Register</Text>
                </Button> 
            </View>
        );
    }
} 

class Register extends React.Component {
    state = {
        loading: true
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ loading: false })  
    }
    render() {
        if (this.state.loading) {
            return (
              <View></View>
            );
        }
        return (
            <View style={{ flex: 1}}>
            <CustomHeader title="Register" navigation={ this.props.navigation } />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Register</Text>
            </View>
            </View>
        );
    }
} 

class SideMenu extends React.Component {
    render() {
        return(
            <SafeAreaView style={{flex: 1, paddingTop: 20}}>
                <ScrollView>
                    <List>
                        <ListItem onPress={ () => this.props.navigation.navigate('Search') }>
                            <Text>Setting</Text>
                        </ListItem>
                        <ListItem onPress={ () => this.props.navigation.navigate('Profile') }>
                            <Text>Profile</Text>
                        </ListItem>
                    </List>
                </ScrollView>
                <List>
                    <ListItem>
                        <Text>Logout</Text>
                    </ListItem>
                </List>
            </SafeAreaView>
        )
    }
}

const navOptionHandler = {
    header: null
}

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: navOptionHandler
        },
        HomeDetail: {
            screen: HomeScreenDetail,
            navigationOptions: navOptionHandler
        }
    }
)

const SettingStack = createStackNavigator(
    {
        Setting: {
            screen: SettingsScreen,
            navigationOptions: navOptionHandler
        },
        SettingDetail: {
            screen: SettingDetail,
            navigationOptions: navOptionHandler
        }
    }
)

const MainTab = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingStack,
});

const MainStack = createStackNavigator({
    Home: {
        screen: MainTab,
        navigationOptions: navOptionHandler
    },
    Search: {
        screen: Search,
        navigationOptions: navOptionHandler
    },
    Profile: {
        screen: Profile,
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
        Login: {
            screen: Login,
            navigationOptions: navOptionHandler
        },
        Register: {
            screen: Register,
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