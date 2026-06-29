import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';

const images = [
  require('../../Resources/image1.jpg'),
  require('../../Resources/image2.jpg'),
  require('../../Resources/image3.jpg'),
];

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const chooseImage = () => {
    Alert.alert(
      'Choose an Image',
      'Select image 1, 2 or 3',
      [
        {
          text: '1',
          onPress: () => setSelectedImage(images[0]),
        },
        {
          text: '2',
          onPress: () => setSelectedImage(images[1]),
        },
        {
          text: '3',
          onPress: () => setSelectedImage(images[2]),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />

      <Button
        title="Choose Image"
        onPress={chooseImage}
      />
    </View>
  );
};

export default Task27;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});