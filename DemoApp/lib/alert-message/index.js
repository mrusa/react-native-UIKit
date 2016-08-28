/* @flow */
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {Close} from '../'


const AlertMessage = ({backgroundColor, color, message, onPress}) => (
  <View style={[styles.row, {backgroundColor:backgroundColor}]}>
    <Text style={[styles.text, {color: color}]}>{message}</Text>
    <Close color={color} onPress={onPress}/>
  </View>
);

import {alertMessage} from '../variables'
const {color, backgroundColor} = alertMessage;

AlertMessage.defaultProps = {
  color: color,
  backgroundColor: backgroundColor,
}

AlertMessage.propTypes = {
  color: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  message: React.PropTypes.string.isRequired,
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
