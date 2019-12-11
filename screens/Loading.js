import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Block } from '../components';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import { connect } from 'react-redux';
import { updateUserField } from '../actions/index';

const Loading = (props) => {
    useEffect(() => {
        _retrieveData();
        if(props.logined) {
            props.navigation.navigate('Home');
        } else {
            props.navigation.navigate('Welcome');
        }
    });

    _retrieveData = async () => {
        try {
          const email = await AsyncStorage.getItem('email');
          const password = await AsyncStorage.getItem('password');
          if (email !== null) {
            // We have data!!
            console.log(email)
          }
        } catch (error) {
          // Error retrieving data
        }
      };

    Loading.navigationOptions = {
        header: null
    };

    return(
        <Block block middle center>
            <ActivityIndicator />
        </Block>
    );
}; 

const mapStateToProps = state => ({
    logined: state.booking.user.logined
});

export default connect(mapStateToProps, { updateUserField })(Loading);  

