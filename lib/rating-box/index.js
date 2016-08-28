import React from 'react';
import {
  View,
} from 'react-native';

import Rating from './rating';

const RatingBox = ({ rating, outOf }) => (
  <View>
    <Rating value={rating} max={outOf} />
  </View>
);

export default RatingBox;

RatingBox.propTypes = {
  rating: React.PropTypes.number.isRequired,
  outOf: React.PropTypes.number.isRequired,
};
