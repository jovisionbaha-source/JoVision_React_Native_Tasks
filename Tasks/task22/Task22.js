import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import MyFunctionPage from '../../Component/MyFunctionPage';

const Task22 = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Parent Text */}
        <Text style={styles.text}>
          Parent Text: {text}
        </Text>

        {/* Child Component */}
        <MyFunctionPage setText={setText} />

      </View>
    </SafeAreaView>
  );
};

export default Task22;

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