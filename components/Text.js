import React from "react";
import { Text, StyleSheet } from "react-native";
import { theme } from "../constants";

const Typography = (props) => {
  const { login, h2, h3, bold, homeTitleText, homeBodyText } = props;
  const textStyles = [
    login && styles.login,
    h2 && styles.h2,
    h3 && styles.h3,
    bold && styles.bold,
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
  bold: {
    fontWeight: 'bold'
  },
  h2: {
    fontSize: theme.sizes.h2
  },
  h3: {
    fontSize: theme.sizes.h3
  },
  homeTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20, 
    marginHorizontal: 20
  },
  homeBodyText: {
    color: '#BE5504',
    marginVertical: 10,
    marginHorizontal: 20
  }
});
  