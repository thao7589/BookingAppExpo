import React, {useEffect} from 'react';
import { FlatList, Image } from 'react-native';
import { Block, Text, Button } from '../components'
import { connect } from 'react-redux';
import { viewPostDetail } from '../actions/index';
import SideMenu from '../screens/SideMenu';
import MenuButton from '../components/MenuButton';
import { AsyncStorage } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

const Home = (props) => {
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
            <MenuButton />
            <FlatList  
                data={props.booking.posts}
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

Home.navigationOptions = {
    header: null
};

const mapStateToProps = state => ({
  booking: state.booking
})

export default connect( mapStateToProps, { viewPostDetail })(Home)