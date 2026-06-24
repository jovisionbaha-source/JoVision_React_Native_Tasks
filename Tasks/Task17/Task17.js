import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Task17 = () => {
  const [showName, setShowName] = useState(false);

  const toggle = () => {
    setShowName(!showName);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title={showName ? "Hide" : "Show"}
        onPress={toggle}
      />

      {showName && (
        <Text style={{ marginTop: 20, fontSize: 20 }}>
          YOUR NAME
        </Text>
      )}

    </View>
  );
};

export default Task17;