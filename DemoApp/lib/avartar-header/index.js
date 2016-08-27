import React, { Component } from 'react';
import {
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //flex:1,
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});

AvartarHeader.defaultProps = {
  height: 40,
  gutter: gutter,
}

AvartarHeader.propTypes = {
  src: React.PropTypes.string.isRequired,
  timestamp: React.PropTypes.number.isRequired,
  heading: React.PropTypes.string.isRequired,
  circle: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
  height: React.PropTypes.number,
  gutter: React.PropTypes.number,
}

export default AvartarHeader;
