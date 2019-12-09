import React from 'react';
import { FlatList } from 'react-native';
import { Block, Text } from '../components'
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <Block>
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
  )
}  

const mapStateToProps = state => ({
  booking: state.booking
})

export default connect( mapStateToProps)(Home)