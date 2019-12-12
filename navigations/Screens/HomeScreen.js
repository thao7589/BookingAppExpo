import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

const HomeScreen = (props) => {
    useEffect(() => {
        // props.navigation.dispatch(DrawerActions.closeDrawer())
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  }
});

export default HomeScreen;