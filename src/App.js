import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>         
          
          <View style={styles.head}>
            <Text style={styles.heading}>News</Text>
            <Image style={styles.menuIcon} source={require('./images/menuIcon.png')}/>
          </View>

          <View style={styles.subtitles}>
            <Text style={styles.subtitle}>Latest Stories</Text>
            <Text style={styles.subtitle}>Most Read</Text>
          </View>


        </View>

        <View style={styles.news}>
            <Image style={styles.newsImg} source={require('./images/news1.jpg')} />
            <Text style={styles.newsHeading}>Covid: Nearly 500,000 redundancies planned since crisis began</Text>
            <Text style={styles.newsText}>British employers planned 58,000 redundancies in August, taking the total to 498,000 for the first five months of the Covid crisis.
            </Text>
        </View> 

        <View style={styles.news}>
            <Image style={styles.newsImg} source={require('./images/news3.jpg')} />
            <Text style={styles.newsHeading}>Bounce back loans: Taxpayers may lose £26bn on unpaid loans</Text>
            <Text style={styles.newsText}>Up to 60% of emergency pandemic loans made under the Bounce Back scheme may never be repaid, a report by the government's spending watchdog says.
            </Text>
        </View> 

        <View style={styles.news}>
            <Image style={styles.newsImg} source={require('./images/news2.jpg')} />
            <Text style={styles.newsHeading}>Extreme poverty set for first rise since 1998, World Bank warns</Text>
            <Text style={styles.newsText}>Extreme poverty is set to rise this year for the first time in more than two decades, with coronavirus expected to push up to 115 million people into that category, the World Bank has said.
            </Text>
        </View> 

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#bb1919'
  },

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  heading: {
    fontSize: 30,
    color: 'white',
    paddingLeft:10,
    paddingBottom:5
  },

  subtitles: {
    backgroundColor: '#a91717',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 6

  },

  subtitle: {
    color: 'white',
    textDecorationLine: 'underline',
  },

  menuIcon: {
    width: 30,
    height: 20,
    marginRight: 15,
    resizeMode: 'stretch'
  },

  news: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderRadius: 5
    
  },
  
  newsImg : {
    width: '100%',
    height: 170,
    marginBottom: 5,
    borderRadius: 5,
    resizeMode: 'stretch'

  },

  newsHeading: {
    fontWeight: 'bold',
    fontSize: 15  
  },

  newsText: {
    fontSize:12
  }
});

export default App;