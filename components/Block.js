import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { theme } from '../constants';

const { height } = Dimensions.get('window');

const Block = (props) => {
  const { loginForm, block, row, center, middle, children, menu, list, drawerMenu, contact, topBar, content, img, detailPost } = props;
  const blockStyles = [
      loginForm && styles.loginForm,
      block && styles.block,
      row && styles.row,
      center && styles.center,
      middle && styles.middle,
      menu && styles.menu,
      list && styles.list,
      drawerMenu && styles.drawerMenu,
      contact && styles.contact,
      topBar && styles.topBar,
      content && styles.content,
      img && styles.img,
      detailPost && styles.detailPost
  ];
  
  return (
    <View style={blockStyles}>
      { children }
    </View>
  );
};

export default Block;
 
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },   
  card: {
    borderRadius: theme.sizes.radius,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  loginForm: {
      margin: 10,
  },
  menu: {
    backgroundColor: '#213052'
  },
  list: {
    borderWidth: 1,
    flex: 6
  },
  img: {
    borderWidth: 1,
    borderColor: '#000',
    flex: 3
  },
  drawerMenu: {
    backgroundColor: '#85A6C9'
  },
  contact: {
    backgroundColor: '#E7442B'
  },
  topBar: {
    height: height / 8,
    zIndex: 1
  },
  content: {
    zIndex: 2
  },
  detailPost: {
    margin: 20
  }
}); 