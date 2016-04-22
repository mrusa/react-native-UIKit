'use strict';
import React, {
  StyleSheet,
  Text,
} from 'react-native';

import moment from 'moment'

const Time = ({timestamp, color}) => (
  <Text style={[styles.time, {color: color}]}>{moment(timestamp).format('LT')}</Text>
);

var styles = StyleSheet.create({
  time: {

  }
});
Time.propTypes = {
  timestamp: React.PropTypes.number,
  color: React.PropTypes.string,
}

Time.defaultProps = {
  color: '#222',
}

export default Time;
