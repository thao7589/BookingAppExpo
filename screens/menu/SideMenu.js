import React from 'react';
import { View, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Text, List, ListItem, Badge } from 'native-base';
import { connect } from 'react-redux';
import { submitLogout } from '../../actions/index';

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
  
const SideMenuConnect =  connect( mapStateToProps, { submitLogout })(SideMenu);
export default SideMenuConnect;