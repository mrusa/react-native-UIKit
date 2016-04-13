import React, {
  StyleSheet,
  Text,
} from 'react-native';

import moment from 'moment'

const DateItem = ({timestamp, color}) => (
  <Text style={[styles.date, {color: color}]}>
    {moment(timestamp).fromNow()}
  </Text>
);

const styles = StyleSheet.create({
  date: {
    marginLeft: 10,
  },
});

DateItem.defaultProps = {
  color: '#222'
}
DateItem.propTypes = {
  color: React.PropTypes.string,
  timestamp: React.PropTypes.number,
}
export default DateItem;
