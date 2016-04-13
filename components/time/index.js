import React, {
  Component,
  StyleSheet,
  defaultProps,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import moment from 'moment'

const Time = ({timestamp, color}) => (
  <Text style={[styles.time, {color: color}]}>{moment(timestamp).format('LT')}</Text>
);

export default Time;


Time.defaultProps = {
  color: '#222',
}


var styles = StyleSheet.create({
  time: {

  }
});
