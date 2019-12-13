import React from 'react';
import { View, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Text, List, ListItem } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class CustomHeader extends React.Component {
    state = {
        loading: true
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ loading: false })  
    }
    render() {
        if (this.state.loading) {
            return (
              <View></View>
            );
        }
        let {title, isHome} = this.props
        return(
            <Header>
                <Left>
                    { isHome ?
                    <Button transparent onPress={ () => this.props.navigation.openDrawer() }>
                        <Icon name='menu' />
                    </Button> :
                    <Button transparent onPress={ () => this.props.navigation.goBack() }>
                        <Icon name='arrow-back' />
                    </Button>
                    }
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        )
    }
}