'use strict';
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const { width,  height } = Dimensions.get('window');

let _scrollView: ScrollView;

const ThumbSwiper = ({images, onPress}) => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    //pagingEnabled={true} // NOTE jumps to next
    directionalLockEnabled={true}
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true} // NOTE experimental feature
    ref={(scrollView) => { _scrollView = scrollView; }}
    automaticallyAdjustContentInsets={false}
    //onScroll={() => { console.log('onScroll!'); }}
    scrollEventThrottle={200}
    contentContainerStyle={styles.scrollView}>
    {images.map((item, i) => <TouchableOpacity key={i} onPress={(id) => onPress(item.id)}>
      <Image style={styles.img} source={{uri: item.src}} />
    </TouchableOpacity>)}
  </ScrollView>
);

ThumbSwiper.propTypes = {
  images: React.PropTypes.array,
  onPress: React.PropTypes.func,
}

export default ThumbSwiper;

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  title: {
    fontSize:20,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    resizeMode: 'cover',
    width: width/3.05,
    height: width/3.05,
    marginRight: width/3*0.025,
    marginBottom: width/3*0.025
  }
})
