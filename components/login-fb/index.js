'use strict';

import React, {
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {gutter} from '../variables'

const LoginFb = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.outer}>
    <Image source={require('./assets/fb-login-button.png')}/>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    marginBottom: gutter
  },
});

LoginFb.propTypes = {
  onPress: React.PropTypes.func,
};

export default LoginFb;
