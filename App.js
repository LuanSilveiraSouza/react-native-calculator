import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {

  const [value, setValue] = useState('0');

  return (
    <View style={styles.container}>
      <Display value={value}/>
      <View style={styles.grid}>
        <Button label='AC' size={3}/>
        <Button label='/' operation />

        <Button label='7' />
        <Button label='8' />
        <Button label='9' />
        <Button label='*' operation />

        <Button label='4' />
        <Button label='5' />
        <Button label='6' />
        <Button label='-' operation />

        <Button label='1' />
        <Button label='2' />
        <Button label='3' />
        <Button label='+' operation />

        <Button label='0' size={2}/>
        <Button label='.' />
        <Button label='=' operation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  }
});
