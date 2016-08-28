import React from 'react';
import {
  View,
} from 'react-native';

const Divider = ({ color, thickness }) => (
  <View style={{ backgroundColor: color, height: thickness }} />
);

Divider.defaultProps = {
  color: '#eee',
  thickness: 1,
};

Divider.propTypes = {
  color: React.PropTypes.string,
  thickness: React.PropTypes.number,
};

export default Divider;
