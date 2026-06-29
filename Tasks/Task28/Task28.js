import React from 'react';
import { View, FlatList, Image, Pressable, Alert, StyleSheet } from 'react-native';

const images = [
  require('../../Resources/img1.jpg'),
  require('../../Resources/img2.jpg'),
  require('../../Resources/img3.jpg'),
  require('../../Resources/img4.jpg'),
  require('../../Resources/img5.jpg'),
  require('../../Resources/img6.jpg'),
  require('../../Resources/img7.jpg'),
  require('../../Resources/img8.jpg'),
  require('../../Resources/img9.jpg'),
  require('../../Resources/img10.jpg'),
];

const Task28 = () => {

  const handlePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handlePress(index)}>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Task28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginHorizontal: 8,
    borderRadius: 10,
  },
});