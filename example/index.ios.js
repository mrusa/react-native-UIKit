'use strict'
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView
} from 'react-native';

import {galleryImages, restaurantData, userPosts, messages, cardData, users} from './data.js'

import {defaultColor, primary, lightGrey, secondary, info,} from './components/variables'

import {
  Button, Heading, Divider, Avatar, Card, AvatarHeader, Close, AlertMessage, LikeBtn,
  Gallery, InputField, Time, DateItem, Calendar, ThumbSwiper, ModalCustom, GalleryTiles, LoginForm, Message,
  ReviewCell, MapSection, Search, GalleryOffset, FadeInUp, ImageFull, ProfileHeader, ArticleText, ListBasic
} from './components'



const App = () => (
    <View style={styles.container}>
      <ImageFull
        src={'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg'}
        height={300}
        onPress={() => console.log('pressed')}
      >
      <Text>Helllo</Text>
    </ImageFull>

    </View>
);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  // header
  mainTitle: {
    fontSize:20,
    marginVertical: 10,
    fontWeight: '400'
  },

  titleContainer: {
    flexDirection: 'column'
  },
  date: {
    marginLeft: 10,
    marginTop: 5,
  },
  thumb: {
    width:50,
    height:50,
    //flex:1,
  },
  // card
  block: {
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    marginBottom: 40
  },

  // seperator: line
  seperator: {
    borderTopWidth: 1,
    borderColor: '#D8D8D8',
    height: 1,
    flex:1,
    marginVertical: 15,
  },
  // lowerSection
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});

AppRegistry.registerComponent('Experiments', () => App);
