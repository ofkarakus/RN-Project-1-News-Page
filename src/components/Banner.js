import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';

const Banner = ({imgText}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: imgText.imageUrl}} />
      <Text style={styles.text}>{imgText.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.8,
    marginVertical: 4,
    marginHorizontal: 0,
    alignItems: 'center',
  },
  img: {
    height: '90%',
    width: '95%',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});

export {Banner};
