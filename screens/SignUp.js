import React, { Component } from 'react';
import { Block, Text, TextInput, Button } from '../components';

const SignUp = (props) => {
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
                <Text h3>Confirm Password:</Text>
                <TextInput login></TextInput> 
            </Block>
            <Block row>
                <Button primary>
                    <Text login>Sign Up</Text>
                </Button>
            </Block>
        </Block>
    );
}

export default SignUp