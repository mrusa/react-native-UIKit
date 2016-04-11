import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {gutter} from './variables'

const Button = ({children, radius, type, invert, backgroundColor, color}) => (
  <TouchableOpacity style={[styles.btn, {borderRadius: radius || 0, backgroundColor: backgroundColor}]}>
    <Text style={[styles.text,{color: color}]}>
      {children}
    </Text>
  </TouchableOpacity>
);



var styles = StyleSheet.create({
  btn: {
    padding: 10,
    marginBottom: gutter
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  }
});

export default Button;
