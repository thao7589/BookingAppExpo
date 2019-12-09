import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { theme } from '../constants';

const Block = (props) => {
  const { loginForm, block, row, center, middle, children, menu, list, drawerMenu } = props;
  const blockStyles = [
      loginForm && styles.loginForm,
      block && styles.block,
      row && styles.row,
      center && styles.center,
      middle && styles.middle,
      menu && styles.menu,
      list && styles.list,
      drawerMenu && styles.drawerMenu
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
    borderWidth: 1
  },
  drawerMenu: {
    backgroundColor: '#85A6C9'
  }
});