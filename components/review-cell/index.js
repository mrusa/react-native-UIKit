'use strict';
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

const ReviewCell = ({title, description, src, onPress, gutter}) => (
  <TouchableOpacity style={[styles.row, {borderColor: lightGrey, marginLeft: gutter}]} onPress={onPress}>
    <View style={[styles.content, {paddingBottom: gutter}]}>
      <Text style={[styles.title, {marginTop: gutter}]}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <RatingBox/>
    </View>
    <Image source={{uri: src}} style={[styles.thumb,{height: 75, width: 70}]}/>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  title: {
    flex:1,
    fontSize: 17,
  },
  description: {
    flex:1,
    fontSize: 13,
    color: grey
  },
  content: {
    height: 75,
    flex: 1,
    flexDirection: 'column',
  },
});
ReviewCell.defaultProps = {
  gutter: gutter,
}
ReviewCell.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  src: React.PropTypes.string,
  onPress: React.PropTypes.func,
  gutter: React.PropTypes.number,
}
export default ReviewCell;
