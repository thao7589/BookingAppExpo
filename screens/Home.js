import React, {useEffect} from 'react';
import { FlatList } from 'react-native';
import { Block, Text } from '../components'
import { connect } from 'react-redux';
import SideMenu from '../screens/SideMenu';

const Home = (props) => {
    return (
        <Block block>
            <Block topBar>
                <SideMenu  navigation={props.navigation}/>
            </Block>
            <Block block content>
                <FlatList  
                    data={props.booking.posts}
                    keyExtractor={post => post.id}
                    renderItem={({ item }) => {
                        return (
                            <Block list>
                                <Text homeTitleText>{item.title}</Text>
                                <Text homeBodyText>{item.body}</Text>
                            </Block>
                        )
                    }}
                />
            </Block>
        </Block>
  )
}  

Home.navigationOptions = {
    header: null
};

const mapStateToProps = state => ({
  booking: state.booking
})

export default connect( mapStateToProps)(Home)