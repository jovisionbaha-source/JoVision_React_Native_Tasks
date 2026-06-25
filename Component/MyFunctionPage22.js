import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MyFunctionPage = ({ setText }) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={(value) => setText(value)}
      />
    </View>
  );
};

export default MyFunctionPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    width: 250,
    borderRadius: 8,
  },
});