import React, {useEffect} from 'react';
import { FlatList, Image } from 'react-native';
import { Block, Text, Button } from '../components'
import { connect } from 'react-redux';
import { viewPostDetail } from '../actions/index';
import SideMenu from '../screens/SideMenu';
import MenuButton from '../components/MenuButton';
import { AsyncStorage } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import CustomHeader from '../components/CustomHeader';

const Cart = (props) => {
    const onViewPostDetail = id => {
        props.viewPostDetail(id)
    };
    
    return (
        <Block block>
            <CustomHeader title='Cart' navigation={props.navigation}/>
            <FlatList  
                data={props.posts}
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

const mapStateToProps = state => ({
  posts: state.booking.cart.list
})

export default connect( mapStateToProps, { viewPostDetail })(Cart)