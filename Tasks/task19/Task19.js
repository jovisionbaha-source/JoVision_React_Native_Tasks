import React, { Component } from 'react';
import { View, Button } from 'react-native';
import MyClassPage from './Component/MyClassPage19';

class App extends Component {
  state = {
    showPage: false,
  };

  togglePage = () => {
    this.setState(prev => ({
      showPage: !prev.showPage,
    }));
  };

  render() {
    return (
      <View>
        <Button title="Show" onPress={this.togglePage} />

        {this.state.showPage && <MyClassPage />}
      </View>
    );
  }
}

export default App;