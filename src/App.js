import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import {NewsCard, Banner} from './components';

const news_data = [
  {
    id: 0,
    author: 'Omkar Godbole',
    title: 'Bulls Exit BitMEX Bitcoin Futures Market',
    description:
      'Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently worth more than $422 million.',
    imageUrl:
      'https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX-1180x628.png',
  },
  {
    id: 1,
    author: 'Benjamin Pirus',
    title: 'Coinbase customers can now dodge a bank',
    description:
      'New update from Coinbase quickens the transmutation of crypto into fiat. Coinbase has unveiled a faster way for its customers to move digital currencies out of crypto and into their bank accounts.',
    imageUrl:
      'https://static.coindesk.com/wp-content/uploads/2020/10/GettyImages-alex-wong-1-1024x628.jpg',
  },
  {
    id: 2,
    author: 'Malwarebytes Labs',
    title: 'VideoBytes: Ransomware gets wasted!',
    description:
      "On today's VideoBytes, we look at how ransomware is on the rise, attacking corporations with malware that not only encrypts files, but also steals it.",
    imageUrl:
      'https://blog.malwarebytes.com/wp-content/uploads/2020/09/shutterstock_640824457-600x410.jpg',
  },
  {
    id: 3,
    author: 'Daniel Sparks',
    title: 'Why Tesla Stock Fell Sharply Friday Morning - Motley Fool',
    description:
      'Shares are down despite Tesla reporting record third-quarter deliveries. Shares of electric-car maker Tesla(NASDAQ:TSLA) fell Friday morning, declining 5% a few minutes into market open.',
    imageUrl: 'https://g.foolcdn.com/editorial/images/593799/stock-down.jpg',
  },
  {
    id: 4,
    author: 'Jessica Bursztynsky',
    title: 'Twilio hits new 52-week high as stock',
    description:
      'Shares of Twilio extended its gains into Friday, reaching a 52-week high, after the company said in a filing that it expects better-than-expected third-quarter revenue.',
    imageUrl:
      'https://image.cnbcfm.com/api/v1/image/105737636-1550147305726gettyimages-1034802076rr.jpg?v=1601647142',
  },
  {
    id: 5,
    author: 'Anonymous',
    title: 'Bounce back loans: Taxpayers may lose £26bn on unpaid loans',
    description:
      "Up to 60% of emergency pandemic loans made under the Bounce Back scheme may never be repaid, a report by the government's spending watchdog says.",
    imageUrl:
      'https://ichef.bbci.co.uk/news/800/cpsprodpb/9421/production/_114412973_investigator2.jpg',
  },
  {
    id: 6,
    author: 'Ben King',
    title: 'Covid: Nearly 500,000 redundancies planned since crisis began',
    description:
      'British employers planned 58,000 redundancies in August, taking the total to 498,000 for the first five months of the Covid crisis.',
    imageUrl:
      'https://ichef.bbci.co.uk/news/800/cpsprodpb/D483/production/_114730445_quadimage3.jpg',
  },
];

const banner_data = [
  {
    id: 0,
    text: 'Best Prime Day 2020 Alexa',
    imageUrl:
      'https://cnet4.cbsistatic.com/img/7bnQrNgv4FtUTWdPZYO29fufx-A=/1200x630/2019/11/20/0aff1d1e-92fc-4b88-aee5-850c550e09a6/cnet-black-friday-best-buy-echo-show-5.jpg',
  },
  {
    id: 1,
    text: 'Stocks After Amazon',
    imageUrl:
      'https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg',
  },
  {
    id: 2,
    text: "Levi's Most Popular Jeans",
    imageUrl:
      'https://s.yimg.com/os/creatr-uploaded-images/2020-10/e9b733b0-09cf-11eb-bfce-a2a6e6d17fa5',
  },
  {
    id: 3,
    text: 'Social Security Benefits?',
    imageUrl:
      'https://s.marketwatch.com/public/resources/images/MW-IQ535_ss_pay_ZG_20201009111853.jpg',
  },
  {
    id: 4,
    text: 'Columbus Day and Veterans Day',
    imageUrl: 'https://images.mktw.net/im-242755/social',
  },
];

const App = () => {
  const renderNewsData = (data) => <NewsCard news={data.item} />;

  const listHeader = () => {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.head}>
            <Text style={styles.heading}>BBC News</Text>
            <Image
              style={styles.menuIcon}
              source={require('./images/menuIcon.png')}
            />
          </View>

          <View style={styles.subtitles}>
            <Text style={styles.subtitle}>Latest Stories</Text>
            <Text style={styles.subtitle}>Most Read</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {banner_data.map((bannerItem) => (
            <Banner imgText={bannerItem} />
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={news_data}
        renderItem={renderNewsData}
        numColumns={2}
        ListHeaderComponent={listHeader}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#bb1919',
  },

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  heading: {
    fontSize: 30,
    color: 'white',
    paddingLeft: 10,
    paddingBottom: 5,
  },

  subtitles: {
    backgroundColor: '#a91717',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 6,
  },

  subtitle: {
    color: 'white',
    textDecorationLine: 'underline',
  },

  menuIcon: {
    width: 30,
    height: 20,
    marginRight: 15,
    resizeMode: 'stretch',
  },
});

export default App;
