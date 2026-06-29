import React, { useRef } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import MyClassPage from '../../Component/MyClassPage';

const Task25 = () => {
  const myClassPageRef = useRef(null);

  const handleTextChange = (value) => {
    myClassPageRef.current?.updateText(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChangeText={handleTextChange}
        />

        <MyClassPage ref={myClassPageRef} />
      </View>
    </SafeAreaView>
  );
};

export default Task25;

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