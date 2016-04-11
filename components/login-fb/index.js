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
/*
LoginFb.propTypes = {
    onPress: PropTypes.func.isRequired
};
*/

var styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    marginBottom: gutter
  },
});


export default LoginFb;
