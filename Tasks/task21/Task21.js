import React, { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import MyFunctionPage from '../../Component/MyFunctionPage21';

const Task21 = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Button
          title={showComponent ? "Hide" : "Show"}
          onPress={() => setShowComponent(prev => !prev)}
        />

        {showComponent && <MyFunctionPage />}
      </View>
    </SafeAreaView>
  );
};

export default Task21;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});