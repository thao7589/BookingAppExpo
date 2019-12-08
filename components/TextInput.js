import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

import { theme } from "../constants";

const InputText = (props) => {
  const { login } = props;
  const inputStyles = [
    login && styles.login
  ] 

  return (
    <TextInput style={inputStyles} onChangeText={props.onChangeText}>
      {props.children} 
    </TextInput>  
  )
}

export default InputText

const styles = StyleSheet.create({
  login: { 
    height: 40, 
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1
  }
})
  