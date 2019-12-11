import React, {useEffect} from 'react';
import { FlatList, Image } from 'react-native';
import { Block, Text, Button } from '../components'
import { connect } from 'react-redux';
import { viewPostDetail } from '../actions/index';
import SideMenu from '../screens/SideMenu'; 
import { AsyncStorage } from 'react-native';

const Cart = (props) => {
    useEffect(() => {
        if(props.booking.viewPost) {
            props.navigation.navigate('PostDetail')
        }
    });

    const onViewPostDetail = id => {
        props.viewPostDetail(id)
    };

    return (
        <Block block>
            {/* <Block block>
                <SideMenu  navigation={props.navigation}/>
            </Block> */}
            <FlatList  
                data={props.booking.cart.list}
                keyExtractor={post => post.postId}
                renderItem={({ item }) => {
                    return (
                        <Block block row>
                            <Block block img>
                                <Image source={{ uri: item.img }} style={{width: 120, height: 135}}/>
                            </Block>
                            <Block list>
                                <Text homeTitleText>{item.title}</Text>
                                <Button onPress={() => onViewPostDetail(item.postId)}>
                                    <Text homeBodyText>Read more...</Text>
                                </Button>
                            </Block>
                        </Block>
                    )
                }}
            />
        </Block>
  )
}  

Cart.navigationOptions = {
    header: null
};

const mapStateToProps = state => ({
  list: state.booking.cart.list
})

export default connect( mapStateToProps, { viewPostDetail })(Cart)