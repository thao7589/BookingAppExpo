import React from 'react';
import { Block, Button, Text } from '../components';

const Welcome = ({ navigation }) => {
    return (
        <Block block>
            <Block block>
                <Button primary onPress={ () => navigation.navigate('Login') }>
                    <Text login>Login</Text>
                </Button>
                <Button secondary onPress={ () => navigation.navigate('Signup') }>
                    <Text login>Sign Up</Text>
                </Button> 
            </Block>    
        </Block>
    );
}

export default Welcome

