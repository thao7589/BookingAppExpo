import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuButton = (props) => {
    return(
        <Ionicons 
            name="md-menu"
            color="#000"
            size={ 32 }
            style={ styles.menuIcon }
            onPress={ () => props.navigation.toggleDrawer() }
        />
    )
};

export default MenuButton;

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 999,
        position: 'absolute',
        top: 40,
        left: 20
    }
});