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
  Button, RatingBox, LoginFb, Heading, Divider, Avatar, Card, AvatarHeader, Close, AlertMessage, LikeBtn,
  Carousel, InputField, Time, DateItem, Calendar, ThumbSwiper, ModalCustom, GalleryTiles, LoginForm, Message,
  ReviewCell, MapSection, Search, GalleryOffset, FadeInUp, ImageFullWidth, ProfileHeader, ArticleText, ListBasic
} from './components'



const App = () => (
    <View style={styles.container}>
      <View style={{padding: 10}}>
        <Time
          timestamp={1460227647478}
          color={'#222'}
        />

  </View>
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
