
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {gutter, grey, lightGrey} from '../variables'

import {RatingBox} from '../'

const ReviewCell = ({title, description, onPress}) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <RatingBox/>
    </View>
    <Image source={require('./assets/thumb.jpeg')} style={[styles.thumb,{height: 75, width: 70}]}/>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#fff',
    marginLeft: gutter,
    borderColor: lightGrey,
    borderBottomWidth: 1,
  },
  title: {
    flex:1,
    //fontWeight: '600',
    fontSize: 17,
    marginTop: gutter
  },
  description: {
    flex:1,
  //  fontWeight: '600',
    fontSize: 13,
    //marginTop: 3,
    color: grey
  },
  content: {
    height: 75,
    paddingBottom: gutter,
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'space-between',
    //backgroundColor: 'red'
  },
  thumb: {

  }
});

export default ReviewCell;
