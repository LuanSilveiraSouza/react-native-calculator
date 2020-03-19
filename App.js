import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {

  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operator, setOperator] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);


  addDigit = num => {
    const clear = displayValue === '0' || clearDisplay;

    if(num === '.' && !clearDisplay && displayValue.includes('.')){
      return;
    }

    const currentValue = (clear ? '' : displayValue) + num;
    setDisplayValue(currentValue);
    setClearDisplay(false);

    if(num !== '.') {
      const newValues = [...values];
      newValues[current] = parseFloat(currentValue);
      setValues(newValues);
    }
  }

  clearMemory = () => {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperator(null);
    setValues([0, 0]);
    setCurrent(0);
  }

  setOperation = symbol => {
    if(current === 0) {
      setClearDisplay(true);
      setOperator(symbol);
      setCurrent(1);
    } else {
      const equals = symbol === '=';
      const newValues = [...values];

      try {
        newValues[0] = eval(`${newValues[0]} ${operator} ${newValues[1]}`);
      } catch(e) {
        newValues[0] = values[0];
      }

      newValues[1] = 0;
      setValues(newValues);
      setDisplayValue(`${newValues[0]}`)
      setOperator(equals ? null : symbol);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(true);
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue}/>
      <View style={styles.grid}>
        <Button label='AC' size={3} onClick={clearMemory}/>
        <Button label='/' operation onClick={setOperation}/>

        <Button label='7' onClick={addDigit}/>
        <Button label='8' onClick={addDigit}/>
        <Button label='9' onClick={addDigit}/>
        <Button label='*' operation onClick={setOperation}/>

        <Button label='4' onClick={addDigit}/>
        <Button label='5' onClick={addDigit}/>
        <Button label='6' onClick={addDigit}/>
        <Button label='-' operation onClick={setOperation}/>

        <Button label='1' onClick={addDigit}/>
        <Button label='2' onClick={addDigit}/>
        <Button label='3' onClick={addDigit}/>
        <Button label='+' operation onClick={setOperation}/>

        <Button label='0' size={2} onClick={addDigit}/>
        <Button label='.' onClick={addDigit}/>
        <Button label='=' operation onClick={setOperation}/>
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
