import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';

const NewsCard = ({news}) => {
  return (
    <View style={styles.news}>
      <Image style={styles.newsImg} source={{uri: news.imageUrl}} />
      <Text style={styles.newsHeading}>{news.title}</Text>
      <Text style={styles.newsText}>{news.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  news: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
    padding: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderRadius: 5,
  },

  newsImg: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
    marginBottom: 5,
    borderRadius: 5,
    resizeMode: 'stretch',
  },

  newsHeading: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  newsText: {
    fontSize: 12,
  },
});

export {NewsCard};
