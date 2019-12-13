import React, {useEffect} from 'react';
import { Block, Button, Text } from '../components';
import { connect } from 'react-redux';

const Welcome = (props) => {
    useEffect(() => {
        
    })

    Welcome.navigationOptions = {
        header: null
    };

    return (
        <Block block>
            <Block block middle>
                <Button button shop onPress={ () => props.navigation.navigate('Home') }>
                    <Text login>Shop</Text>
                </Button>
                <Button button primary onPress={ () => props.navigation.navigate('Login') }>
                    <Text login>Login</Text>
                </Button>
                <Button button secondary onPress={ () => props.navigation.navigate('SignUp') }>
                    <Text login>Sign Up</Text>
                </Button> 
            </Block>    
        </Block>
    );
};

const mapStateToProps = state => ({
    logined: state.booking.user.logined
});
     
export default connect(mapStateToProps)(Welcome);   

