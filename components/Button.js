import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as theme from '../constants/theme';

const Button = (props) => {
  const { button, primary, secondary, shop } = props;
  const buttonStyles = [
    button && styles.button,
    primary && styles.primary,
    secondary && styles.secondary,
    shop && styles.shop
  ]

  return (
    <TouchableOpacity style={buttonStyles} onPress={props.onPress}>
      {props.children} 
    </TouchableOpacity>  
  )
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 25,
  },
  primary: {   
    backgroundColor: theme.colors.primary
  },
  secondary: {
    backgroundColor: theme.colors.secondary
  },
  shop: {
    backgroundColor: theme.colors.shop
  }
});
   
