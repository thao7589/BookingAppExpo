import React, {useEffect} from 'react';
import { Block, Button, Text } from '../components';

const Welcome = ({ navigation }) => {
    Welcome.navigationOptions = {
        header: null
    };

    return (
        <Block block>
            <Block block middle>
                <Button button shop onPress={ () => navigation.navigate('Home') }>
                    <Text login>Shop</Text>
                </Button>
                <Button button primary onPress={ () => navigation.navigate('Login') }>
                    <Text login>Login</Text>
                </Button>
                <Button button secondary onPress={ () => navigation.navigate('SignUp') }>
                    <Text login>Sign Up</Text>
                </Button> 
            </Block>    
        </Block>
    );
};

Welcome.navigationOptions = ({navigation}) => {
    return {
        header: null,
        headerLeft: () => (
          <Button onPress={() => navigation.toggleDrawer()}>
            <Text>opencxzc</Text>
          </Button>
        )
      };
    };

export default Welcome;

