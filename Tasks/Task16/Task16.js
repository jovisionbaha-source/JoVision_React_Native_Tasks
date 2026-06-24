import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Task16 = () => {
  const [showName, setShowName] = useState(false);

  const toggleName = () => {
    setShowName(prev => !prev);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button title="Show" onPress={toggleName} />

      {showName && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          Your Name
        </Text>
      )}

    </View>
  );
};

export default Task16;