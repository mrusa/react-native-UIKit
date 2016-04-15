import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {primary, gutter} from '../variables'

const Button = ({children, radius, fontWeight, fontSize, backgroundColor, color, gutter, onPress}) => (
  <TouchableOpacity
    style={[styles.btn, {borderRadius: radius, backgroundColor: backgroundColor, padding: gutter ,marginBottom: gutter}]}
    onPress={onPress}
  >
    <Text style={[styles.text,{color: color, fontSize:fontSize, fontWeight:fontWeight}]}>
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {

  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  }
});

Button.defaultProps = {
  radius: 4,
  backgroundColor: primary,
  color: '#fff',
  gutter: gutter
}
Button.propTypes = {
//  children, ??
  radius: React.PropTypes.number,
  type: React.PropTypes.string,
  invert: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
  color: React.PropTypes.string,
  gutter: React.PropTypes.number,
}
export default Button;
