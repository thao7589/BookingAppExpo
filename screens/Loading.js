import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Block } from '../components';
import Welcome from '../screens/Welcome';

const Loading = ({ navigation }) => {
    useEffect(() => {
        navigation.navigate('Welcome');
    });

    return(
        <Block block middle center>
            <ActivityIndicator />
        </Block>
    );
} 

export default Loading

