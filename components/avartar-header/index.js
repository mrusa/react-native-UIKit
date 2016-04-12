import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';

import {gutter} from '../variables'

import {Heading, Avatar, DateItem } from '../'

const AvartarHeader = ({src, timestamp, heading, circle, backgroundColor, height, gutter}) => (
  <View style={[styles.header, {backgroundColor: backgroundColor, padding: gutter}]}>
    <Avatar
      circle={circle}
      size={height}
      src={src}
    />
  <View style={[styles.titleContainer, {height: height}]}>
      <Heading size={15} weight={'600'}>{heading}</Heading>
      <DateItem timestamp={timestamp}/>
    </View>
  </View>
);

var styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex:1,
    //backgroundColor: 'blue',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  //  paddingBottom: 10,
  }
});
export default AvartarHeader;
