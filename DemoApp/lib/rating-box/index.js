'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Rating from './rating'

export default class RatingBox extends Component {

  render() {
    return (
      <View>
      <Rating value={this.props.rating} max={this.props.outOf}/>
      </View>
    );
  }
}
