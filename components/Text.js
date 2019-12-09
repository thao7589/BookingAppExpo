import React from "react";
import { Text, StyleSheet } from "react-native";
import { theme } from "../constants";

const Typography = (props) => {
  const { login, h3, homeTitleText, homeBodyText } = props;
  const textStyles = [
    login && styles.login,
    h3 && styles.h3,
    homeTitleText && styles.homeTitleText,
    homeBodyText && styles.homeBodyText
  ]; 

  return (
    <Text style={textStyles} onPress={props.onPress}>
      {props.children} 
    </Text>  
  );
};

export default Typography;

const styles = StyleSheet.create({
  login: {
    textAlign: 'center',
    fontSize: theme.sizes.h1,
    color: theme.colors.white
  },
  h3: {
    fontSize: theme.sizes.h3
  },
  homeTitleText: {
    marginVertical: 10,
    marginHorizontal: 20
  },
  homeBodyText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
      marginHorizontal: 20
  }
});
  