import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(1);
  const [rndmnum, setRndmnum] = useState(0);

  useEffect(() => gameOver(), [])

  const gameOver = () => {
    setRndmnum(Math.floor(Math.random() * 100) + 1);
    setText('Guess a number between 1-100');
    setCount(1);
    setGuess('');
  }

  const feelinLucky = () => {
    if (rndmnum === parseInt(guess)) {
      Alert.alert(`Good job! You guessed the number in ${count} guesses!`);
      gameOver();
    }
    else if (rndmnum < parseInt(guess)) {
      setText(`Your guess ${guess} is too high!`);
      setGuess('');
    }
    else {
      setText(`Your guess ${guess} is too low!`);
      setGuess('');
    }

    setCount(prevCount => prevCount + 1);
  }


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{text}</Text>
      <TextInput
        keyboardType='numeric'
        style={{fontSize: 25, width: 45, borderColor: 'black', backgroundColor: 'orange', borderWidth:2, margin: 2}}
        onChangeText={guess => setGuess(guess)}
        value={guess}/>
      
      <Button onPress={feelinLucky} title="Feelin' lucky?!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
