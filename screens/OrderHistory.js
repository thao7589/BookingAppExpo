import React, { Component } from 'react';
import { Block, Button, Text, TextInput } from '../components';
import * as constant from '../constants';
import { connect } from 'react-redux';

const OrderHistory = (props) => {
    return(
        <Text>OrderHistory</Text>
    ); 
};

const mapStateToProps = state => ({
    booking: state.booking
});
 
export default connect(mapStateToProps)(OrderHistory);   