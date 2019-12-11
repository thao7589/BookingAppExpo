import React, { useEffect } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Button, Block, Text} from '../components';
import MapView, { Polyline } from 'react-native-maps';
import { connect } from 'react-redux';
import { addCart } from '../actions/index';

const PostDetail = (props) => {
    useEffect(() => {
        // console.log(props.post)
    })

    const onAddCart = (post) => {
        props.addCart(post);
        console.log(props.cart)
    }

    return (
        <ScrollView>
            <Block block >
                <Block center detailPost>
                    <Text h2 bold>
                        {props.post.title}
                    </Text>
                </Block>
                <Block>
                    <Image source={{ uri: props.post.img }} style={{width: 400, height: 400}}/>
                </Block>
                <Block detailPost>
                    <Block> 
                        <Text>
                            Price: {props.post.price}
                        </Text>
                    </Block>
                </Block>
                <Block>
                    <Block>
                        <Button onPress={() => onAddCart(props.post)}>
                            <Text homeBodyText>
                                Add To Cart
                            </Text>
                        </Button>
                    </Block>
                </Block>
                <Block detailPost>
                    <Text h3>
                        {props.post.description}
                    </Text>
                </Block>
                <Block detailPost>
                    <Text h3>
                        Address: {props.post.address}
                    </Text>
                </Block>
                <Block detailPost>
                    <MapView
                    style={styles.map}
                    region={{
                        latitude: 10.799110,
                        longitude: 106.669045,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}>
                        <Polyline
                            coordinates={[
                                {latitude: 10.801389, longitude: 106.711330},
                                {latitude: 10.799110, longitude: 106.669045}
                            ]}
                            strokeColor='red'
                            strokeWidth={1}
                        />
                    </MapView>
                </Block>
            </Block>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    map: {
        width: 400,
        height: 400
    }
})

const mapStateToProps = state => ({
    post: state.booking.viewPost,
    cart: state.booking.cart
});

export default connect( mapStateToProps, { addCart })(PostDetail);