import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import MyClassPage from '../../Component/MyClassPage';

const Task23 = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Parent Text: {text}
        </Text>

        <MyClassPage setText={setText} />
      </View>
    </SafeAreaView>
  );
};

export default Task23;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});