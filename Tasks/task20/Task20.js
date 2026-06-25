import React, { Component } from 'react';
import { View, Button } from 'react-native';
import MyClassPage20 from '../../Component/MyClassPage20';

class Task20 extends Component {
  state = {
    show: false,
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <View style={{ padding: 20 }}>
        <Button
          title="Show"
          onPress={this.toggleShow}
        />

        {this.state.show && <MyClassPage20 />}
      </View>
    );
  }
}

export default Task20;