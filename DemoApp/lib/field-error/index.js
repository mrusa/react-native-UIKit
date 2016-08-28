import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { gutter, error } from '../variables';

const FieldError = ({ errorMsg, error, color, marginBottom }) => (
  <View style={[styles.container, { marginBottom }]}>
    {error ? <Text style={{ color }}>
      {errorMsg}
    </Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

FieldError.defaultProps = {
  error: false,
  color: error,
  marginBottom: gutter,
};

FieldError.propTypes = {
  errorMsg: React.PropTypes.string,
  error: React.PropTypes.bool,
  color: React.PropTypes.string,
  marginBottom: React.PropTypes.number,
};

export default FieldError;
