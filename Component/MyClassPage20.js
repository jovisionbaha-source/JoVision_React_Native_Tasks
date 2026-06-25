import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage20 extends Component {

  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Task 20 Page 👋</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#e0e0e0',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyClassPage20;