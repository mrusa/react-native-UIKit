import React, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {Close} from '../'


const AlertMessage = ({backgroundColor, color}) => (
  <View style={[styles.row, {backgroundColor:backgroundColor}]}>
    <Text style={[styles.text, {color: color}]}>I am the message text here</Text>
    <Close/>
  </View>
);

import {alertMessage} from '../variables'
const {color, backgroundColor} = alertMessage;

AlertMessage.defaultProps = {
  color: color,
  backgroundColor: backgroundColor
}

AlertMessage.propTypes = {
  color: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
}

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 2
  },
  text: {
    fontSize: 15,
    fontWeight: '600',

  }
})

export default AlertMessage;
