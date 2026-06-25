import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage = () => {

  useEffect(() => {
    console.log("MyFunctionPage Mounted");

    return () => {
      console.log("MyFunctionPage Unmounted");
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is MyFunctionPage Component</Text>
    </View>
  );
};

export default MyFunctionPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});