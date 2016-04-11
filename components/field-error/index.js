import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {gutter, error} from '../variables'

const FieldError = ({errorMsg, error}) => (
  <View style={styles.container}>
    {error ? <Text style={styles.error}>{errorMsg}</Text> : null}
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
