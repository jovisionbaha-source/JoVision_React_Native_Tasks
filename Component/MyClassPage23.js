import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChangeText={this.props.setText}
        />
      </View>
    );
  }
}

export default MyClassPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
  },
});