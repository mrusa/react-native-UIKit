import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {gutter, error} from '../variables'

const FieldError = ({errorMsg, error, color, marginBottom}) => (
  <View style={[styles.container, {marginBottom: marginBottom}]}>
    {error ? <Text style={{color: color}}>{errorMsg}</Text> : null}
  </View>
);

var styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    paddingLeft: 10,
  },
});

FieldError.defaultProps = {
  error: false,
  color: error,
  marginBottom: gutter
}
FieldError.propTypes = {
  errorMsg: React.PropTypes.string,
  error: React.PropTypes.bool,
  color: React.PropTypes.string,
  marginBottom: React.PropTypes.number,
}
export default FieldError;
