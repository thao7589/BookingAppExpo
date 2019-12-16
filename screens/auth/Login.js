import React, { useEffect } from 'react';
import { Block, Button, Text, TextInput } from '../../components';
import * as constant from '../../constants';
import { connect } from 'react-redux';
import { updateUserField, submitLogin } from '../../actions/index';
import CustomHeader from '../../components/CustomHeader';

const Login = (props) => {
    useEffect(() => {
        if(props.logined) {
            props.navigation.navigate('Home')
        }
    });

    const onChangeEmail = ev => {
        props.updateUserField('email', ev); 
    };

    const onChangePass = ev => { 
        props.updateUserField('password', ev);
    };

    const onSubmitLogin = () => {
        props.submitLogin();
    }

    return(
        <Block block>
            <CustomHeader title='Login' navigation={props.navigation}/>
            <Block loginForm>
                <Block>
                    <Text h3>Email:</Text>
                    <TextInput login onChangeText={onChangeEmail}></TextInput>
                </Block>
                <Block> 
                    <Text h3>Password:</Text> 
                    <TextInput login onChangeText={onChangePass}></TextInput> 
                </Block>
                <Block loginForm>
                    <Button primary onPress={onSubmitLogin}>
                        <Text login>Login</Text>
                    </Button>
                </Block> 
            </Block>
        </Block>
    ); 
};

const mapStateToProps = state => ({
    logined: state.booking.user.logined
});
 
export default connect(mapStateToProps, { updateUserField, submitLogin })(Login);   