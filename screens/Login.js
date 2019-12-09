import React, { Component } from 'react';
import { Block, Button, Text, TextInput } from '../components';
import * as constant from '../constants';

const Login = (props) => {
    return(
        <Block loginForm>
            <Block row>
                <Text h3>Email:</Text>
                <TextInput login></TextInput>
            </Block>
            <Block row> 
                <Text h3>Password:</Text>
                <TextInput login></TextInput> 
            </Block>
            <Block row>
                <Button primary>
                    <Text login>Login</Text>
                </Button>
            </Block> 
        </Block>
    ) 
}

export default Login