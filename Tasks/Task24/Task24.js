import React, { useRef } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import MyFunctionPage from '../../Component/MyFunctionPage';

const Task24 = () => {
  const myFunctionPageRef = useRef(null);

  const handleTextChange = (value) => {
    myFunctionPageRef.current?.updateText(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChangeText={handleTextChange}
        />

        <MyFunctionPage ref={myFunctionPageRef} />
      </View>
    </SafeAreaView>
  );
};

export default Task24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});