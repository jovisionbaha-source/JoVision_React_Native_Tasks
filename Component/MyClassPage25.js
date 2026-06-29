import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  state = {
    text: '',
  };

  updateText = (value) => {
    this.setState({ text: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default MyClassPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});