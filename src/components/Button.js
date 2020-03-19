import React from 'react';
import {Dimensions, Text, StyleSheet, TouchableHighlight, } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: ((Dimensions.get('window').width / 4) * 1) - 5,
    padding: 10,
    margin: 1,
    backgroundColor: '#6496dc',
    borderWidth: 1,
    borderColor: '#fff',
  },
  operationButton: {
    backgroundColor: '#1e5baa',
  },  
  text: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
  }
});

export default props => {

  const stylesButton = [styles.button];
  let size;

  if(props.operation) {
    stylesButton.push(styles.operationButton);
  }
  if(props.size) {
    size = props.size;
  } else {
    size = 1;
  }
  stylesButton.push({
    width: ((Dimensions.get('window').width / 4) * size) - 2,
  });

  return(
    <TouchableHighlight style={stylesButton} //onPress={() => props.onClick(props.label)}>
    >
      <Text style={styles.text}>{props.label}</Text>
    </TouchableHighlight>
  );
}