import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Block } from '../components';

const Loading = () => {
    return(
        <Block block middle center>
            <ActivityIndicator />
        </Block>
    )
} 

export default Loading

