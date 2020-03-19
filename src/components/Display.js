import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'flex-end',
    borderWidth: 2,
    borderColor: '#fff',
    margin: 10,
  }, 
  text: {
    fontSize: 60,
    color: '#fff',
  }
});

export default props => {
  return(
    <View style={styles.display}>
      <Text style={styles.text} numberOfLines={1}>{props.value}</Text>
    </View>
  );
}