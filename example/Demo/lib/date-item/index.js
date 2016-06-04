import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
} from 'react-native';

import moment from 'moment'

const DateItem = ({timestamp, color, marginLeft}) => (
  <Text style={[styles.date, {color: color, marginLeft: marginLeft}]}>
    {moment(timestamp).fromNow()}
  </Text>
);

const styles = StyleSheet.create({
  date: {

  },
});

DateItem.defaultProps = {
  color: '#222',
  marginLeft: 0,
}
DateItem.propTypes = {
  color: React.PropTypes.string,
  timestamp: React.PropTypes.number.isRequired,
  marginLeft: React.PropTypes.number
}
export default DateItem;
