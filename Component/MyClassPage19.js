import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from MyClassPage 👋</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyClassPage;