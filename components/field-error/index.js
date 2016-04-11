import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {gutter, error} from '../variables'

const FieldError = ({errorMsg}) => (
  <View style={styles.container}>
    <Text style={styles.error}>{errorMsg}</Text>
  </View>
);

export default FieldError;

var styles = StyleSheet.create({
  container: {
    marginBottom: gutter,
    justifyContent:'center',
    paddingLeft: 10,
    //backgroundColor: '#fff'
  },
  error: {
    color: error,
  },

});
