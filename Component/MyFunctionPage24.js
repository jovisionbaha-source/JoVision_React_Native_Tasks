import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(value) {
      setText(value);
    },
  }));

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
});

export default MyFunctionPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});