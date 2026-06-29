import React, { useState } from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet } from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState('Your IP will appear here');

  // Async/Await
  const getIpAsync = async () => {
    try {
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      setIp('Error fetching IP');
    }
  };

  // Promise (.then)
  const getIpPromise = () => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => setIp(data.ip))
      .catch(() => setIp('Error fetching IP'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Button
          title="Async/Await"
          onPress={getIpAsync}
        />

        <View style={{ height: 20 }} />

        <Button
          title="Promise"
          onPress={getIpPromise}
        />

        <Text style={styles.text}>
          {ip}
        </Text>

      </View>
    </SafeAreaView>
  );
};

export default Task26;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginTop: 30,
    fontSize: 18,
  },
});