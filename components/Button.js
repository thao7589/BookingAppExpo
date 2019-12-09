import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as theme from '../constants/theme';

const Button = (props) => {
  console.log(props)
  const { primary, secondary } = props;
  const buttonStyles = [
    primary && styles.primary,
    secondary && styles.secondary
  ]

  return (
    <TouchableOpacity style={buttonStyles} onPress={props.onPress}>
      {props.children} 
    </TouchableOpacity>  
  )
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 25,
    backgroundColor: theme.colors.primary
  },
  secondary: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 25,
    backgroundColor: theme.colors.secondary
  }
});
   
