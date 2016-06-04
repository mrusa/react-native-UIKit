import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const Divider = ({color}) => (
  <View style={[styles.seperator, {borderColor: color}]}></View>
);

var styles = StyleSheet.create({
  seperator: {
    borderTopWidth: 1,
    height: 1,
    marginVertical: 10,
  }
});

Divider.defaultProps = {
  color: '#eee'
}
Divider.propTypes = {
  color: React.PropTypes.string,
}

export default Divider;
