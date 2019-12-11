import React, { useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { Block, Text, TextInput, Button } from '../components';
import { updateUserField, submitSignUp } from '../actions/index';

const SignUp = (props) => {
    useEffect(() => {
        if(props.signedUp) {
            props.navigation.navigate('Home')
        }
    });

    const onChangeFirstName = ev => {
        props.updateUserField('firstName', ev); 
    };

    const onChangeLastName = ev => {
        props.updateUserField('lastName', ev); 
    };
    const onChangeAddress = ev => {
        props.updateUserField('address', ev); 
    };
    const onChangeEmail = ev => {
        props.updateUserField('email', ev); 
    };

    const onChangePass = ev => { 
        props.updateUserField('password', ev);
    };

    const onChangeConfirmPass = ev => { 
        props.updateUserField('confirmPassword', ev);
    };

    const onSubmitSignUp = () => {
        props.submitSignUp();
    };

    return(
        <KeyboardAwareScrollView>
            <Block>
                <Text h3>First name:</Text>
                <TextInput login onChangeText={onChangeFirstName}></TextInput>
            </Block>
            <Block>
                <Text h3>Last name:</Text>
                <TextInput login onChangeText={onChangeLastName}></TextInput>
            </Block>
            <Block>
                <Text h3>Address:</Text>
                <TextInput login onChangeText={onChangeAddress}></TextInput>
            </Block>
            <Block>
                <Text h3>Email:</Text>
                <TextInput login onChangeText={onChangeEmail}></TextInput>
            </Block>
            <Block> 
                <Text h3>Password:</Text>
                <TextInput login onChangeText={onChangePass}></TextInput> 
            </Block>
            <Block> 
                <Text h3>Confirm Password:</Text>
                <TextInput login onChangeText={onChangeConfirmPass}></TextInput> 
            </Block>  
            <Block loginForm>
                <Button primary onPress={onSubmitSignUp}>
                    <Text login>Sign Up</Text>
                </Button>
            </Block>
        </KeyboardAwareScrollView>
    );
};

const mapStateToProps = state => ({
    user: state.booking.user,
    signedUp: state.booking.signedUp
});

export default connect(mapStateToProps, { updateUserField, submitSignUp })(SignUp);  