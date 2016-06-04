'use strict';
import React, { Component } from 'react';
import  {
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

const ImageCustom = ({src, height, children, blurRadius, fullHeight, overlayOpacity, overlayColor}) => (
    <Image source={{uri: src}}
      blurRadius={blurRadius}
      style={{resizeMode: 'cover', height: height, flex:fullHeight ? 1 : 0}}>
      <View style={{position: 'absolute', top:0, left:0, bottom:0, right:0, backgroundColor: overlayColor, opacity: overlayOpacity}}></View>
      {children}
    </Image>
);

ImageCustom.defaultProps = {
  height: 300,
  blurRadius: 0,
  fullHeight: false,
  overlayOpacity: 0,
  overlayColor: '#000'
}
ImageCustom.propTypes = {
  src: React.PropTypes.string,
  height: React.PropTypes.number,
  onPress: React.PropTypes.func,
  blurRadius: React.PropTypes.number,
  fullHeight: React.PropTypes.bool,
  overlayOpacity: React.PropTypes.number,
  overlayColor: React.PropTypes.string,
}
export default ImageCustom;
