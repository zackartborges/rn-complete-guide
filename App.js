import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal"
        style={styles.input}
        />
        <Button title="Add" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  borderColor: 'black',
  borderWidth: 1, 
  padding: 50,
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10 
  }
});
