import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';

import {gutter} from '../variables'

import {Heading, Avatar, DateItem } from '../'

const AvatarHeader = ({src, timestamp, heading, circle, backgroundColor, height, gutter}) => (
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

AvatarHeader.propTypes = {
  src: React.PropTypes.string.isRequired,
  timestamp: React.PropTypes.number,
  heading: React.PropTypes.string,
  circle: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
  height: React.PropTypes.number,
  gutter: React.PropTypes.number,
}
export default AvatarHeader;
